import { Link } from 'react-router-dom';
import { profile } from '../data/profile.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container pb-8 pt-12">
      <div className="flex flex-col gap-6 border-t border-border/70 pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <Link to="/" className="inline-flex items-center gap-3 rounded-full text-foreground">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground font-display text-lg font-semibold text-background">
            {profile.initials}
          </span>
          <span>Mohamed Ncib</span>
        </Link>
        <p>(c) {year} Mohamed Ncib. Designed as a product-designer portfolio.</p>
      </div>
    </footer>
  );
}
