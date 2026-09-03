import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const projects = [
  {
    number: "01",
    title: "MELLEMRUM",
    category: "UX/UI · REACT · SUPABASE",
    description:
      "En digital eventplatform, hvor brugere kan finde arrangementer, tilmelde sig og selv oprette events.",
    image: "mellemrum-hero.png",
    to: "/projekter/mellemrum",
    latest: true,
  },

  {
    number: "02",
    title: "RESET APP",
    category: "UX/UI & FRONTEND",
    description:
      "Selvvalgt eksamensopgave med fokus på at hjælpe husstanden med at holde styr på pligter og ansvar.",
    image: "reset-card.png",
    to: "/projekter/reset",
  },

  {
    number: "03",
    title: "SPILCAFÉ",
    category: "UX/UI DESIGN",
    description:
      "En digital løsning til en spilcafé i Aarhus, der hjælper gæster med at finde spil og skabe overblik over udvalget.",
    image: "spilcafe.png",
    to: "/projekter/spilcafe",
  },

  {
    number: "04",
    title: "NORTH",
    category: "CUSTOMER EXPERIENCE",
    description:
      "Et projekt med fokus på customer experience, research og udvikling af en sammenhængende digital brugeroplevelse.",
    image: "north-card.png",
    to: "/projekter/north",
  },

  {
    number: "05",
    title: "STORCENTER NORD",
    category: "UX & DIGITAL DESIGN",
    description:
      "Et projekt med fokus på at skabe en mere overskuelig og relevant digital oplevelse for centrets besøgende.",
    image: "storcenter-card.png",
    to: "/projekter/storcenter-nord",
  },
];

export default function Projects({ onContact }) {
  return (
    <div className="projects-page">
      <Header onContact={onContact} />

      {/* =====================================
          HERO
      ====================================== */}

      <section className="projects-hero">
        <div className="projects-hero-circle"></div>

        <div className="projects-hero-star">✳</div>

        <div className="projects-hero-content">
          <p className="projects-overline">MIT ARBEJDE</p>

          <h1>PROJEKTER</h1>

          <p className="projects-handwriting">Udvalgte projekter</p>

          <p className="projects-intro">
            Her kan du se et udvalg af projekter fra min
            multimediedesignuddannelse, hvor jeg blandt andet har arbejdet med
            UX/UI, research, Figma, prototyping og frontend.
          </p>
        </div>
      </section>

      {/* =====================================
          PROJEKTER
      ====================================== */}

      <main className="projects-content">
        <div className="projects-content-heading">
          <div>
            <p>UDVALGTE PROJEKTER</p>

            <h2>Design der skaber værdi.</h2>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              to={project.to}
              className="project-overview-card"
              key={project.title}
            >
              <div className="project-overview-image">
                {project.latest && (
                  <span className="latest-project-badge">NYESTE PROJEKT</span>
                )}

                <span className="project-number">{project.number}</span>

                <img src={`/images/${project.image}`} alt={project.title} />
              </div>
              <div className="project-overview-info">
                <p className="project-overview-category">{project.category}</p>

                <h2>{project.title}</h2>

                <p className="project-overview-description">
                  {project.description}
                </p>

                <span className="project-overview-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer onContact={onContact} />
    </div>
  );
}
