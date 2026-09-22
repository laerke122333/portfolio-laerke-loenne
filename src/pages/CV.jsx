import Header from "../components/Header";
import "../styles/cv.css";
import Footer from "../components/Footer";

export default function CV({ onContact }) {
  // Stier til dine PDF-filer i public-mappen
  const cvFile = `${import.meta.env.BASE_URL}cv.pdf`;
  const applicationFile = `${import.meta.env.BASE_URL}ansoegning.pdf`;

  return (
    <>
      <Header onContact={onContact} />

      <main className="cv-page">
        {/* INTRO */}

        <section className="cv-intro">
          <span className="cv-eyebrow">LÆR MIG BEDRE AT KENDE</span>

          <h1>CV & ansøgning</h1>

          <p>
            Her kan du læse mere om mig, mine kompetencer og min motivation for
            at arbejde med digitalt design og udvikling.
          </p>
        </section>

        {/* DOKUMENTER */}

        <section className="cv-documents">
          {/* CV */}

          <article className="cv-document-card">
            <div className="cv-document-header">
              <div>
                <h2>Mit CV</h2>

                <p>
                  Få et overblik over min uddannelse, mine kompetencer og min
                  erfaring.
                </p>
              </div>
            </div>

            <div className="cv-pdf-preview">
              <iframe
                src={`${cvFile}#toolbar=0&navpanes=0&view=Fit`}
                title="Lærkes CV"
                loading="lazy"
              />
            </div>

            <div className="cv-document-actions">
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-button-secondary"
              >
                Se CV ↗
              </a>

              <a
                href={cvFile}
                download="Laerke-CV.pdf"
                className="cv-button-primary"
              >
                Download CV ↓
              </a>
            </div>
          </article>

          {/* ANSØGNING */}

          <article className="cv-document-card">
            <div className="cv-document-header">
              <div>
                <h2>Min ansøgning</h2>

                <p>
                  Læs om min motivation, mine ambitioner og hvad jeg kan bidrage
                  med.
                </p>
              </div>
            </div>

            <div className="cv-pdf-preview">
              <iframe
                src={`${applicationFile}#toolbar=0&navpanes=0&view=Fit`}
                title="Lærkes ansøgning"
                loading="lazy"
              />
            </div>

            <div className="cv-document-actions">
              <a
                href={applicationFile}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-button-secondary"
              >
                Se ansøgning ↗
              </a>

              <a
                href={applicationFile}
                download="Laerke-Ansoegning.pdf"
                className="cv-button-primary"
              >
                Download ansøgning ↓
              </a>
            </div>
          </article>
        </section>
      </main>

      <Footer onContact={onContact} />
    </>
  );
}