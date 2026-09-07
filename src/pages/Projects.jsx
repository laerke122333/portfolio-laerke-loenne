import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Projects({ onContact }) {
  const projects = [
    {
      title: "MELLEMRUM",
      category: "UX/UI · REACT · SUPABASE",
      description:
        "En digital eventplatform, hvor brugere kan finde arrangementer, tilmelde sig og selv oprette events.",
      image: "mellemrum-hero.png",
      to: "/projekter/mellemrum",
      latest: true,
    },

    {
      title: "RESET",
      category: "UX/UI · REACT · SUPABASE",
      description:
        "En digital løsning med fokus på at skabe overblik over hverdagens opgaver og gøre fordelingen mere overskuelig.",
      image: "resetbillede.png",
      to: "/projekter/reset",
    },
    
    {
      number: "05",
      title: "DATE IDEA",
      category: "FRITIDSPROJEKT · UX/UI · REACT",
      description:
        "Et personligt projekt udviklet i min fritid med fokus på at gøre det nemmere og sjovere for par at finde inspiration til nye dates.",
      image: "dateideer.PNG",
      to: "/projekter/date-idea",
    },
    {
      title: "SPILCAFÉ",
      category: "UX/UI · BRUGEROPLEVELSE",
      description:
        "Et projekt med fokus på at gøre det lettere for gæster at finde og vælge spil gennem en mere overskuelig digital løsning.",
      image: "spil-cafe.card.png",
      to: "/projekter/spilcafe",
    },

    {
      title: "NORTH",
      category: "CUSTOMER EXPERIENCE",
      description:
        "Et projekt med fokus på customer experience, research og udvikling af en sammenhængende digital brugeroplevelse.",
      image: "north.card.png",
      to: "/projekter/north",
    },

    {
      title: "STORCENTER NORD",
      category: "CUSTOMER EXPERIENCE",
      description:
        "Et projekt med fokus på customer experience, research og udvikling af en sammenhængende digital brugeroplevelse.",
      image: "centernord.png",
      to: "/projekter/storcenternord",
    },
  ];

  return (
    <div className="projects-page">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header onContact={onContact} />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="projects-hero">
        <div className="projects-hero-circle"></div>

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

        <span className="projects-hero-star">✳</span>
      </section>

      {/* =====================================================
          PROJEKTER
      ====================================================== */}

      <section className="projects-content">
        {/* OVERSKRIFT */}

        <div className="projects-content-heading">
          <div>
            <p>UDVALGTE PROJEKTER</p>

            <h2>
              Design der skaber
              <br />
              værdi.
            </h2>
          </div>

          <p className="projects-heading-text">
            Her er et udvalg af projekter, hvor jeg har arbejdet med forskellige
            dele af den digitale designproces – fra research og idéudvikling til
            design og udvikling.
          </p>
        </div>

        {/* =====================================================
            GRID
        ====================================================== */}

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              to={project.to}
              className="project-overview-card"
              key={project.title}
            >
              {/* BILLEDE */}

              <div className="project-overview-image">
                <img
                  src={`${import.meta.env.BASE_URL}images/${project.image}`}
                  alt={`${project.title} projekt`}
                  loading="lazy"
                />

                {/* NUMMER */}

                <span className="project-number">{project.number}</span>

                {/* NYESTE PROJEKT */}

                {project.latest && (
                  <span className="latest-project-badge">NYESTE PROJEKT</span>
                )}
              </div>

              {/* TEKST */}

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
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer onContact={onContact} />
    </div>
  );
}
