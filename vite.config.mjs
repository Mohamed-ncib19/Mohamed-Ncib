import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Runs the Netlify function in-process during `npm run dev`, so local and
 * deployed behaviour match and the Notion token stays in the Node process
 * instead of the browser bundle.
 */
function notionDevEndpoint(env) {
  return {
    name: 'notion-dev-endpoint',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/notion', async (req, res) => {
        // loadEnv does not touch process.env, so hand the values over explicitly.
        process.env.NOTION_TOKEN ??= env.NOTION_TOKEN;
        process.env.NOTION_DATABASE_ID ??= env.NOTION_DATABASE_ID;
        for (const key of ['ARCHETYPE', 'OBJECTIVE', 'RESOURCES', 'TIMELINE', 'CONTACT']) {
          process.env[`NOTION_PROP_${key}`] ??= env[`NOTION_PROP_${key}`];
        }

        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);

        try {
          const { handler } = await server.ssrLoadModule('/netlify/functions/notion.js');
          const result = await handler({
            httpMethod: req.method,
            body: Buffer.concat(chunks).toString('utf8'),
          });
          res.statusCode = result.statusCode;
          for (const [key, value] of Object.entries(result.headers || {})) {
            res.setHeader(key, value);
          }
          res.end(result.body);
        } catch (error) {
          server.config.logger.error(`[notion-dev] ${error?.stack || error}`);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Local Notion endpoint failed. See the dev server logs.' }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // '' loads every variable, not just the VITE_-prefixed ones. These stay on the
  // server: nothing here is exposed to `import.meta.env`.
  const env = loadEnv(mode, dirname, '');

  return {
    plugins: [react(), notionDevEndpoint(env)],
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(dirname, 'src'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/@remix-run')) {
              return 'react-vendor';
            }

            if (id.includes('node_modules/motion') || id.includes('node_modules/framer-motion')) {
              return 'motion';
            }

            if (id.includes('node_modules/lucide-react')) {
              return 'icons';
            }

            return undefined;
          },
        },
      },
    },
  };
});
