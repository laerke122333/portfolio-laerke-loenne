import { Link, NavLink } from "react-router-dom";

export default function Header({ onContact }) {
  return (
    <header className="portfolio-header">
      <Link to="/" className="portfolio-logo">
        <span>Lærke Theodine Lønne</span>
      </Link>

      <nav className="portfolio-nav">
        <NavLink
          to="/projekter"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Projekter
        </NavLink>

        <NavLink
          to="/cv"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          CV & ansøgning
        </NavLink>

        <button
          type="button"
          className="portfolio-contact-button"
          onClick={onContact}
        >
          Kontakt mig
        </button>
      </nav>
    </header>
  );
}
