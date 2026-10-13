import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Indsæt links til jeres outputs
const branddeckUrl = "";
const figmaPrototypeUrl = "";

export default function LaRouge({ onContact }) {
  return (
    <div className="mellemrum-page la-rouge-page">
      <Header onContact={onContact} />

      {/* HERO */}
      <section className="mellemrum-hero">
        <div className="mellemrum-hero-shape" />

        <div className="mellemrum-container">
          <Link to="/projekter" className="mellemrum-back">
            <span>←</span> Tilbage til projekter
          </Link>

          <div className="mellemrum-hero-grid">
            <div className="mellemrum-hero-text">
              <p className="mellemrum-category">
                BRANDIDENTITET · UX/UI · RE-COMMERCE
              </p>

              <h1>RENÉE</h1>

              <p className="mellemrum-script">Secondhand by La Rouge</p>

              <div className="mellemrum-note">
                <div className="mellemrum-note-tape" />

                <p>
                  Hvordan kan La Rouge skabe større interesse for secondhand og
                  gøre det mere attraktivt at sælge tidligere købte styles
                  videre? Vi udviklede Renée by La Rouge, et selvstændigt
                  subbrand med fokus på kvalitet, cirkularitet og en mere
                  overskuelig digital brugerrejse.
                </p>
             

              <a
                href="https://www.figma.com/proto/4umfWJHHIXawLBI0zhRBZQ/La-Rouge?page-id=19%3A4&node-id=19-203&viewport=670%2C576%2C0.06&t=NQ7TpeVOhNNpWIZz-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=19%3A203"
                target="_blank"
                rel="noreferrer"
                className="project-live-link"
              >
                Se Figma prototype →
              </a>
            </div>
 </div>
            <div className="mellemrum-hero-image-area">
              <div className="mellemrum-image-blob" />

              <div className="mellemrum-browser">
                <div className="mellemrum-browser-top">
                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="browser-address">renée by la rouge</div>
                </div>

                <video
                  className="mellemrum-hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="Video af Renée by La Rouges secondhand-forside"
                >
                  <source
                    src={`${import.meta.env.BASE_URL}videos/la-rouge-video.mp4`}
                    type="video/mp4"
                  />
                  Din browser understøtter ikke video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJEKTOVERBLIK */}
      <section className="mellemrum-overview">
        <div className="mellemrum-section-heading">
          <p>KORT FORTALT</p>
          <h2>PROJEKTOVERBLIK</h2>
        </div>

        <div className="mellemrum-overview-grid">
          <article className="mellemrum-overview-card">
            <div className="mellemrum-overview-icon">◷</div>
            <div>
              <span>PROJEKTTYPE</span>
              <h3>Subbrand · Re-commerce</h3>
            </div>
          </article>

          <article className="mellemrum-overview-card">
            <div className="mellemrum-overview-icon">✎</div>
            <div>
              <span>MIN ROLLE</span>
              <h3>Koncept · UX/UI</h3>
            </div>
          </article>

          <article className="mellemrum-overview-card">
            <div className="mellemrum-overview-icon">&lt;/&gt;</div>
            <div>
              <span>VÆRKTØJER</span>
              <h3>Figma · Brandudvikling</h3>
            </div>
          </article>
        </div>
      </section>

      {/* CASE OG UDFORDRING */}
      <section className="mellemrum-about">
        <div className="mellemrum-about-heading">
          <p>CASE STUDY</p>
          <h2>Casen og udfordringen</h2>
        </div>

        <div className="mellemrum-about-text">
          <p>
            La Rouge havde allerede et secondhand-koncept, men det manglede en
            tydelig visuel identitet og en mere selvstændig digital
            tilstedeværelse. Udfordringen var at gøre secondhand mere synligt og
            attraktivt, uden at miste forbindelsen til La Rouges eksisterende
            brand.
          </p>

          <p>
            Vi valgte at fastholde den eksisterende målgruppe på 47–57-årige
            kvinder og fokusere på kvalitet, tryghed, overskuelighed og et
            tidløst visuelt udtryk.
          </p>
        </div>
      </section>

      {/* KONCEPT OG LØSNING */}
      <section className="mellemrum-features">
        <div className="mellemrum-section-heading">
          <p>FRA INDSIGT TIL LØSNING</p>
          <h2>KONCEPT OG REDESIGN</h2>

          <p className="mellemrum-heading-description">
            Vi udviklede et selvstændigt subbrand og gentænkte brugerrejsen for
            sælgeren, som skal gøre det mere attraktivt at videresælge tidligere
            købte styles.
          </p>
        </div>

        {/* 01 - BRANDIDENTITET */}
        <article className="mellemrum-feature">
          <div className="mellemrum-feature-image">
            <div className="feature-tape" />

            <img
              src={`${import.meta.env.BASE_URL}images/la-rouge-brand.png`}
              alt="Brandkoncept og visuel identitet for Renée by La Rouge"
              loading="lazy"
            />
          </div>

          <div className="mellemrum-feature-text">
            <span className="feature-number">01</span>

            <h3>Et selvstændigt subbrand</h3>

            <p>
              Vi udviklede navnet Renée by La Rouge for at give
              secondhand-konceptet sin egen identitet, samtidig med at
              forbindelsen til hovedbrandet blev bevaret. Subbrandet skulle
              føles som et naturligt næste kapitel for La Rouge – ikke som en
              separat genbrugsbutik.
            </p>

            <p>
              Den visuelle retning bygger på et tidløst og kvalitetsbevidst
              udtryk, hvor genkendelighed kombineres med værdier som
              cirkularitet, kuratering og længere levetid for tøjet.
            </p>
          </div>
        </article>

        {/* 02 - FORSIDE */}
        <article className="mellemrum-feature mellemrum-feature-reverse">
          <div className="mellemrum-feature-image">
            <div className="feature-tape" />

            <img
              src={`${import.meta.env.BASE_URL}images/la-rouge-forside.png`}
              alt="Redesignet forside for Renée by La Rouge"
              loading="lazy"
            />
          </div>

          <div className="mellemrum-feature-text">
            <span className="feature-number">02</span>

            <h3>En tydeligere indgang til secondhand</h3>

            <p>
              Vi redesignede forsiden på secondhand siden ved bla. at indsætte
              et stort hero-billede for blikfang og indsætte CTA-knapper med
              klar information for hvad man kan på siden. Kunden mødes af
              tydelige indgange til både at købe brugt tøj og sælge tidligere
              købte styles videre, samt mulighed for tydelig information om
              konceptet og dets fordele.
            </p>

            <p>
              Formålet var at gøre La rouges secondhand mere attraktiv for
              målgruppen og gøre salgsflowet mere intuitivt. Samt skabe en
              visuel identitet for RENÈE, der signalerer kvalitet og
              cirkularitet.
            </p>
          </div>
        </article>

        {/* 03 - SALGSFLOW */}
        <article className="mellemrum-feature">
          <div className="mellemrum-feature-image">
            <div className="feature-tape" />

            <img
              src={`${import.meta.env.BASE_URL}images/la-rouge-saelg.png`}
              alt="Prototype af salgsflowet for kunder, der vil sælge tøj"
              loading="lazy"
            />
          </div>

          <div className="mellemrum-feature-text">
            <span className="feature-number">03</span>

            <h3>Et enklere salgsflow</h3>

            <p>
              En vigtig del af konceptet var at gøre det mere attraktivt for
              kunderne at sælge deres La Rouge-tøj videre. Vi strukturerede
              processen i tydelige trin, så kunden lettere kan forstå, hvad der
              skal ske fra valg af styles til afsendelse af pakken.
            </p>

            <p>
              Ved at forklare processen og synliggøre fordelene ønskede vi at
              skabe større tryghed og reducere usikkerheden ved at sælge brugt
              tøj.
            </p>
          </div>
        </article>

        {/* 04 - PAKKE OG INFORMATION */}
        <article className="mellemrum-feature mellemrum-feature-reverse">
          <div className="mellemrum-feature-image">
            <div className="feature-tape" />

            <img
              src={`${import.meta.env.BASE_URL}images/la-rouge-pakke.png`}
              alt="Prototype med QR-kode og trinvis vejledning til afsendelse"
              loading="lazy"
            />
          </div>

          <div className="mellemrum-feature-text">
            <span className="feature-number">04</span>

            <h3>Fra valg af tøj til afsendelse</h3>

            <p>
              Vi designede et flow, hvor kunden guides gennem processen med
              konkrete instruktioner og visuelle trin. F.eks. når kunden har
              valgt de styles, de vil sælge til La rouge, bliver de sendt videre
              til en både visuel og tekst guide.
            </p>

            <p>
              Det er med til at gøre processen mere overskuelig og mindske den
              usikkerhed, der kan få kunder til at opgive, før de har gennemført
              salget.
            </p>
          </div>
        </article>
      </section>

      {/* ARBEJDSPROCES */}
      <section className="mellemrum-process">
        <div className="mellemrum-section-heading">
          <p>VORES ARBEJDSPROCES</p>
          <h2>Fra analyse til koncept</h2>
        </div>

        <div className="mellemrum-process-grid">
          <article className="mellemrum-process-step">
            <span className="process-step-number">01</span>
            <div className="process-step-icon">⌕</div>
            <h3>Research</h3>
            <p>
              Vi undersøgte La Rouges brand, målgruppe og eksisterende
              secondhand-koncept.
            </p>
          </article>

          <div className="process-connector">→</div>

          <article className="mellemrum-process-step">
            <span className="process-step-number">02</span>
            <div className="process-step-icon">✦</div>
            <h3>Koncept</h3>
            <p>
              Vi definerede Renée by La Rouge og dets rolle i forhold til
              hovedbrandet.
            </p>
          </article>

          <div className="process-connector">→</div>

          <article className="mellemrum-process-step">
            <span className="process-step-number">03</span>
            <div className="process-step-icon">◇</div>
            <h3>Identitet</h3>
            <p>Vi udviklede logo, visuel retning og brandets kommunikation.</p>
          </article>

          <div className="process-connector">→</div>

          <article className="mellemrum-process-step">
            <span className="process-step-number">04</span>
            <div className="process-step-icon">&lt;/&gt;</div>
            <h3>Brugerrejse</h3>
            <p>
              Vi redesignede de digitale flows for køb og videresalg i Figma.
            </p>
          </article>

          <div className="process-connector">→</div>

          <article className="mellemrum-process-step">
            <span className="process-step-number">05</span>
            <div className="process-step-icon">✓</div>
            <h3>Prototype</h3>
            <p>Vi samlede konceptet i en visuel og interaktiv prototype.</p>
          </article>
        </div>
      </section>

      
      {/* FAGLIG REFLEKSION */}
      <section className="mellemrum-learning">
        <div>
          <p className="learning-small-title">MIN UDVIKLING</p>
          <h2>Hvad har jeg lært?</h2>
        </div>

        <div className="learning-text">
          <p>
            Projektet har givet mig erfaring med at udvikle et subbrand, der
            både skal have sin egen identitet og bevare en tydelig forbindelse
            til et eksisterende brand. Jeg har lært, hvor vigtigt det er at
            begrunde visuelle valg ud fra brandets værdier og målgruppens behov.
          </p>

        </div>
      </section>

      {/* =====================================================
          TILBAGE TIL PROJEKTER
      ====================================================== */}

      <section className="mellemrum-bottom">
        <p>SE MERE</p>

        <h2>Se mine andre projekter</h2>

        <Link to="/projekter" className="mellemrum-bottom-button">
          Alle projekter
          <span>→</span>
        </Link>
      </section>

      <Footer onContact={onContact} />
    </div>
  );
}
