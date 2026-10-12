import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Indsæt links til jeres dokumentation
const uxAuditUrl = "";
const figmaPrototypeUrl = "";

export default function Vuuh({ onContact }) {
  return (
    <div className="mellemrum-page vuuh-page">
      <Header onContact={onContact} />

      {/* HERO */}
      <section className="mellemrum-hero">
        <div className="mellemrum-hero-shape" />

        <div className="mellemrum-hero-dots">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index} />
          ))}
        </div>

        <span className="mellemrum-hero-star">✳</span>

        <div className="mellemrum-container">
          <Link to="/projekter" className="mellemrum-back">
            <span>←</span> Tilbage til projekter
          </Link>

          <div className="mellemrum-hero-grid">
            <div className="mellemrum-hero-text">
              <p className="mellemrum-category">
                UX AUDIT · ONBOARDING · FIGMA
              </p>

              <h1>VUUH</h1>

              <p className="mellemrum-script">En bedre onboardingoplevelse</p>

              <div className="mellemrum-note">
                <div className="mellemrum-note-tape" />

                <p>
                  I denne case analyserede, redesignede og kvalificerede vi
                  Vuuhs onboardingoplevelse. Målet var at gøre det lettere for
                  nye brugere at forstå platformen og gennemføre integrationen
                  med Shopify.
                </p>

                {uxAuditUrl && (
                  <a
                    href={uxAuditUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-live-link"
                  >
                    Se UX Audit Summary →
                  </a>
                )}

                <a
                  href="https://www.figma.com/proto/FZNTrqToDfjYlKVa3ePIXZ/Case-2--Prototype---forarbejde?node-id=214-697&page-id=214%3A534&starting-point-node-id=214%3A697&scaling=scale-down-width&content-scaling=fixed&t=XKbwtoi1LXs0YxqI-1"
                  target="_blank"
                  rel="noreferrer"
                  className="project-live-link"
                >
                  Se figma prototype →
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

                  <div className="browser-address">app.vuuh.com</div>
                </div>

                <video
                  className="mellemrum-hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="Video af Vuuhs dashboard"
                >
                  <source
                    src={`${import.meta.env.BASE_URL}videos/vuuh-dashboard.mp4`}
                    type="video/mp4"
                  />
                  Din browser understøtter ikke video.
                </video>
              </div>

              <span className="mellemrum-arrow">↗</span>
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
              <h3>UX-optimering</h3>
            </div>
          </article>

          <article className="mellemrum-overview-card">
            <div className="mellemrum-overview-icon">✎</div>
            <div>
              <span>MIN ROLLE</span>
              <h3>UX-analyse & redesign</h3>
            </div>
          </article>

          <article className="mellemrum-overview-card">
            <div className="mellemrum-overview-icon">◇</div>
            <div>
              <span>METODER & VÆRKTØJER</span>
              <h3>Heuristikker · Cognitive Walkthrough · Figma</h3>
            </div>
          </article>
        </div>
      </section>

      {/* CASE OG UDFORDRING */}
      <section className="mellemrum-about">
        <span className="mellemrum-about-star">✳</span>

        <div className="mellemrum-about-heading">
          <p>CASE STUDY</p>
          <h2>Casen og udfordringen</h2>
        </div>

        <div className="mellemrum-about-text">
          <p>
            Den eksisterende onboarding gav ikke brugeren en tydelig vej gennem
            opsætningen. Startsiden manglede information om, hvad man skulle
            gøre som det næste, og forbindelsen mellem Vuuh og Shopify var ikke
            tilstrækkeligt forklaret.
          </p>

          <p>
            Vores mål var at mindske forvirring og hjælpe brugeren fra første
            besøg til en forståelig installationsproces med tydelige trin og
            feedback.
          </p>
        </div>
      </section>

      {/* ANALYSE OG REDESIGN */}
      <section className="mellemrum-features">
        <div className="mellemrum-section-heading">
          <p>FRA FUND TIL LØSNING</p>
          <h2>ANALYSE OG REDESIGN</h2>

          <p className="mellemrum-heading-description">
            Designbeslutningerne tog udgangspunkt i de problemer, vi fandt i
            UX-auditten.
          </p>
        </div>

        {/* 01 - UNDERSØGELSE */}
        <article className="mellemrum-feature">
          <div className="mellemrum-feature-image">
            <div className="feature-tape" />

            <img
              src={`${import.meta.env.BASE_URL}images/vuuh-audit.png`}
              alt="Udsnit af vores heuristiske evaluering af Vuuh"
              loading="lazy"
            />
          </div>

          <div className="mellemrum-feature-text">
            <span className="feature-number">01</span>

            <h3>Undersøgelse og prioritering</h3>

            <p>
              Vi gennemførte en heuristisk evaluering med udgangspunkt i
              Nielsens heuristikker og et Cognitive Walkthrough for at undersøge
              brugerens vej gennem onboardingprocessen. Vi dokumenterede
              observationer, potentielle usability-problemer og deres betydning
              for brugeroplevelsen.
            </p>

            <p>
              Analysen viste tre gennemgående problemer: mangel på information,
              manglende intuitiv navigation og utilstrækkelig feedback. Brugeren
              blev blandt andet mødt af en startside uden tydelig retning, en
              installation uden tilstrækkelig vejledning og manglende
              bekræftelse på udførte handlinger.
            </p>

            <p>
              På baggrund af vores UX Audit Summary prioriterede vi problemerne
              efter deres betydning for, om brugeren kunne gennemføre
              onboarding. Manglen på vejledning og den uklare
              installationsproces blev prioriteret højest.
            </p>
          </div>
        </article>

        {/* 02 - DASHBOARD */}
        <article className="mellemrum-feature mellemrum-feature-reverse">
          <div className="mellemrum-feature-image">
            <div className="feature-tape" />

            <img
              src={`${import.meta.env.BASE_URL}images/vuuh-dashboard.png`}
              alt="Redesign af Vuuhs dashboard"
              loading="lazy"
            />
          </div>

          <div className="mellemrum-feature-text">
            <span className="feature-number">02</span>

            <h3>Redesign og faglige valg</h3>

            <p>
              Vi valgte at fokusere på at gøre onboardingprocessen mere guidet
              og overskuelig. En central ændring var at forenkle Vuuhs
              dashboard, så brugeren mødes af færre valgmuligheder og lettere
              kan identificere sit næste skridt.
            </p>

            <p>
              Vi fjernede blandt andet sektionen med foreslåede brands, da den
              skabte et unødvendigt valg tidligt i processen. I stedet
              fokuserede vi på en tydeligere vej til at forbinde Shopify med
              Vuuh.
            </p>

            <p>
              Derudover arbejdede vi med en guidet onboarding, som skal hjælpe
              brugeren gennem installationen og integrationen trin for trin. Vi
              ønskede også at gøre det lettere at forstå platformens funktioner
              og give brugeren tydeligere feedback undervejs. Endelig
              identificerede vi mindre accessibility-problemer, som kunne skabe
              yderligere forvirring.
            </p>
          </div>
        </article>

        {/* 03 - ONBOARDING */}
        <article className="mellemrum-feature">
          <div className="mellemrum-feature-image">
            <div className="feature-tape" />

            <img
              src={`${import.meta.env.BASE_URL}images/vuuh-onboarding.png`}
              alt="Skærmbillede af den guidede onboarding i Figma-prototypen"
              loading="lazy"
            />
          </div>

          <div className="mellemrum-feature-text">
            <span className="feature-number">03</span>

            <h3>Resultat</h3>

            <p>
              Resultatet blev et redesignkoncept med fokus på en mere
              struktureret onboarding, færre unødvendige valg og tydeligere
              vejledning. UX Audit Summary og Figma-prototypen dokumenterer
              henholdsvis de identificerede problemer og vores forslag til
              forbedringer.
            </p>

            <p>
              Redesignet tager direkte udgangspunkt i analysens fund og forsøger
              at gøre vejen fra første besøg til en gennemført integration mere
              forståelig. Forbedringernes faktiske effekt kræver efterfølgende
              brugertest.
            </p>
          </div>
        </article>

        {/* 04 - ACCESSIBILITY */}
        <article className="mellemrum-feature mellemrum-feature-reverse">
          <div className="mellemrum-feature-image">
            <div className="feature-tape" />

            <img
              src={`${import.meta.env.BASE_URL}images/vuuh-accessibility.png`}
              alt="Eksempel på forbedringer i Vuuhs onboardingprototype"
              loading="lazy"
            />
          </div>

          <div className="mellemrum-feature-text">
            <span className="feature-number">04</span>

            <h3>Min faglige refleksion</h3>

            <p>
              Projektet har givet mig større forståelse for, hvordan systematisk
              UX-evaluering kan bruges til at identificere og prioritere
              problemer frem for at redesigne ud fra personlige præferencer. Jeg
              har lært at koble konkrete observationer til designbeslutninger og
              se onboarding som mere end en introduktion til et produkt: Det er
              en proces, hvor brugeren skal guides sikkert frem mod sit mål.
            </p>

            <p>
              Et naturligt næste skridt ville være at brugerteste prototypen for
              at undersøge, om brugerne kan gennemføre integrationen med færre
              tvivlsspørgsmål og større sikkerhed.
            </p>
          </div>
        </article>
      </section>

      {/* ARBEJDSPROCES */}
      <section className="mellemrum-process">
        <div className="mellemrum-section-heading">
          <p>VORES ARBEJDSPROCES</p>
          <h2>Fra analyse til redesign</h2>
        </div>

        <div className="mellemrum-process-grid">
          <article className="mellemrum-process-step">
            <span className="process-step-number">01</span>
            <div className="process-step-icon">⌕</div>
            <h3>Evaluering</h3>
            <p>
              Vi gennemgik onboarding med heuristikker og Cognitive Walkthrough.
            </p>
          </article>

          <div className="process-connector">→</div>

          <article className="mellemrum-process-step">
            <span className="process-step-number">02</span>
            <div className="process-step-icon">▤</div>
            <h3>Fund</h3>
            <p>
              Vi dokumenterede problemer med information, navigation og
              feedback.
            </p>
          </article>

          <div className="process-connector">→</div>

          <article className="mellemrum-process-step">
            <span className="process-step-number">03</span>
            <div className="process-step-icon">↗</div>
            <h3>Prioritering</h3>
            <p>
              Vi prioriterede de største barrierer for at gennemføre onboarding.
            </p>
          </article>

          <div className="process-connector">→</div>

          <article className="mellemrum-process-step">
            <span className="process-step-number">04</span>
            <div className="process-step-icon">◇</div>
            <h3>Prototype</h3>
            <p>
              Vi redesignede dashboardet og udarbejdede en guidet onboarding i
              Figma.
            </p>
          </article>

          <div className="process-connector">→</div>

          <article className="mellemrum-process-step">
            <span className="process-step-number">05</span>
            <div className="process-step-icon">✓</div>
            <h3>Næste skridt</h3>
            <p>
              Brugertest skal undersøge, om løsningen er lettere at gennemføre.
            </p>
          </article>
        </div>
      </section>

      {/* RESULTATER */}
      <section className="mellemrum-results">
        <div className="mellemrum-result-shape" />

        <div className="mellemrum-section-heading">
          <p>DEN FORESLÅEDE LØSNING</p>
          <h2>DE VIGTIGSTE FORBEDRINGER</h2>

          <p className="mellemrum-results-script">En tydeligere vej frem</p>
        </div>

        <div className="mellemrum-results-grid">
          <article className="mellemrum-result-card">
            <span className="mellemrum-result-icon">▦</span>

            <h3>Mere overblik</h3>

            <p>
              Et simplere dashboard hjælper brugeren med at fokusere på næste
              skridt.
            </p>
          </article>

          <article className="mellemrum-result-card">
            <span className="mellemrum-result-icon">✓</span>

            <h3>Guidet installation</h3>

            <p>
              Trinvis vejledning skal gøre det lettere at forbinde Vuuh og
              Shopify.
            </p>
          </article>

          <article className="mellemrum-result-card">
            <span className="mellemrum-result-icon">✦</span>

            <h3>Tydeligere feedback</h3>

            <p>
              Bedre information skal hjælpe brugeren med at forstå status og
              næste handling.
            </p>
          </article>
        </div>
      </section>

      {/* FAGLIG REFLEKSION */}
      <section className="mellemrum-learning">
        <div className="learning-decoration">✳</div>

        <div>
          <p className="learning-small-title">MIN UDVIKLING</p>
          <h2>Hvad har jeg lært?</h2>
        </div>

        <div className="learning-text">
          <p>
            Projektet har givet mig erfaring med at evaluere en eksisterende
            brugeroplevelse systematisk og bruge konkrete fund som grundlag for
            designbeslutninger.
          </p>

          <p>
            Jeg har fået en bedre forståelse for, hvordan onboarding skal guide
            brugeren mod et klart mål, og hvordan information, feedback og færre
            unødvendige valg kan mindske usikkerhed. Et naturligt næste skridt
            er at teste Figma-prototypen med brugere og undersøge, om de kan
            gennemføre integrationen mere intuitivt.
          </p>
        </div>
      </section>

      <Footer onContact={onContact} />
    </div>
  );
}
