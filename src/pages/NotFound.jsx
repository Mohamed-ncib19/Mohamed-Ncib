import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <section className="container flex min-h-[72vh] flex-col items-start justify-center pb-20 pt-36">
      <p className="eyebrow mb-5">404</p>
      <h1 className="display-title max-w-4xl">This page doesn&apos;t exist.</h1>
      <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
        The link may be out of date, or the page may have moved. Head back to the work I&apos;ve built.
      </p>
      <Button as={Link} to="/#showcase" className="mt-10">
        Explore my work
      </Button>
    </section>
  );
}
