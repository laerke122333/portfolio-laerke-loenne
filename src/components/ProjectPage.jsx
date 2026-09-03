import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function ProjectPage({
  category,
  title,
  scriptTitle,
  intro,
  video,
  poster,
  mediaType = "phone",
  overview,
  about,
  process,
  results,
  onContact,
}) {
  return (
    <div className="project-page">
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Header onContact={onContact} />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="project-detail-hero">
        {/* BAGGRUNDS-DEKORATION */}

        <div className="project-hero-circle"></div>

        <div className="project-hero-dots">
          <span></span>
          <span></span>
          <span></span>

          <span></span>
          <span></span>
          <span></span>

          <span></span>
          <span></span>
          <span></span>
        </div>

        <span className="project-hero-star project-star-one">✳</span>

        <span className="project-hero-star project-star-two">✦</span>

        <div className="project-detail-container">
          {/* TILBAGE */}

          <Link to="/projekter" className="project-back">
            <span>←</span>
            Tilbage til projekter
          </Link>

          <div className="project-hero-grid">
            {/* =====================================
                VENSTRE SIDE
            ====================================== */}

            <div className="project-hero-text">
              <p className="project-category">{category}</p>

              <h1>{title}</h1>

              <p className="project-script-title">{scriptTitle}</p>

              {/* POST-IT */}

              <div className="project-note">
                <div className="project-note-tape"></div>

                <span className="project-note-star">✦</span>

                <p>{intro}</p>
              </div>
            </div>

            {/* =====================================
                VIDEO
            ====================================== */}

            <div className="project-media-area">
              <div className="project-media-shape"></div>

              <div
                className={`project-video-frame ${
                  mediaType === "wide"
                    ? "project-video-wide"
                    : "project-video-phone"
                }`}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={poster}
                >
                  <source src={video} type="video/mp4" />
                  Din browser understøtter ikke video.
                </video>
              </div>

              <span className="project-media-doodle">↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJEKT OVERBLIK
      ====================================================== */}

      <section className="project-overview-section">
        <div className="project-section-heading">
          <p>KORT FORTALT</p>

          <h2>PROJEKT OVERBLIK</h2>

          <div className="project-heading-line"></div>
        </div>

        <div className="project-overview-grid">
          {overview.map((item, index) => (
            <article className="project-overview-item" key={index}>
              <div className="project-overview-icon">{item.icon}</div>

              <div>
                <p className="project-overview-label">{item.label}</p>

                <p className="project-overview-value">{item.value}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          OM PROJEKTET
      ====================================================== */}

      <section className="project-about-section">
        <div className="project-about-decoration">✳</div>

        <div className="project-about-content">
          <div className="project-about-heading">
            <p>CASE STUDY</p>

            <h2>OM PROJEKTET</h2>
          </div>

          <div className="project-about-text">
            {about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="project-about-dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* =====================================================
          PROCESSEN
      ====================================================== */}

      <section className="project-process-section">
        <div className="project-section-heading project-process-heading">
          <p>FRA IDÉ TIL LØSNING</p>

          <h2>PROCESSEN</h2>

          <p className="project-process-intro">
            Projektet blev udviklet trin for trin med fokus på brugeren,
            konceptet og den endelige løsning.
          </p>
        </div>

        <div className="project-process-grid">
          {process.map((step, index) => (
            <div className="project-process-step" key={index}>
              <div className="process-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="process-icon">{step.icon}</div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

              {index < process.length - 1 && (
                <span className="process-arrow">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          RESULTAT
      ====================================================== */}

      <section className="project-results-section">
        <div className="project-results-shape"></div>

        <div className="project-results-content">
          <div className="project-results-heading">
            <p>DEN ENDELIGE LØSNING</p>

            <h2>RESULTATET</h2>

            <p className="project-results-script">
              Det vigtigste fra løsningen
            </p>
          </div>

          <div className="project-results-grid">
            {results.map((result, index) => (
              <article className="project-result-card" key={index}>
                {result.image && (
                  <div className="project-result-image">
                    <img src={result.image} alt={result.title} />
                  </div>
                )}

                <div className="project-result-content">
                  {result.icon && (
                    <div className="result-icon">{result.icon}</div>
                  )}

                  <h3>{result.title}</h3>

                  <p>{result.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <span className="results-star">✳</span>
      </section>

      {/* =====================================================
          TILBAGE TIL PROJEKTER
      ====================================================== */}

      <section className="project-bottom-navigation">
        <p>SE MERE</p>

        <h2>Se mine andre projekter</h2>

        <Link to="/projekter" className="project-bottom-button">
          Alle projekter
          <span>→</span>
        </Link>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer onContact={onContact} />
    </div>
  );
}
