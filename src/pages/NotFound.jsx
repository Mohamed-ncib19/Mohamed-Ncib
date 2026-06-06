import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <section className="container flex min-h-[72vh] flex-col items-start justify-center pb-20 pt-36">
      <p className="eyebrow mb-5">404</p>
      <h1 className="display-title max-w-4xl">This page has no case study yet.</h1>
      <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
        The portfolio route exists, but the requested page does not. Return to the work grid to explore the available placeholder case studies.
      </p>
      <Button as={Link} to="/#work" className="mt-10">
        Return to work
      </Button>
    </section>
  );
}
