const path = require('path');

module.exports = async () => {
  const { defineConfig } = await import('vite');
  const react = (await import('@vitejs/plugin-react')).default;

  return defineConfig({
    plugins: [react()],
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      proxy: {
        '/notion-proxy': {
          target: 'https://api.notion.com',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/notion-proxy/, ''),
        },
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
  });
};
