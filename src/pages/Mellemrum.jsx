import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Mellemrum({ onContact }) {
  return (
    <div className="vuuh-page">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header onContact={onContact} />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="mellemrum-hero">
        <div className="mellemrum-hero-shape"></div>

        <div className="mellemrum-container">
          {/* TILBAGE */}

          <Link to="/projekter" className="mellemrum-back">
            <span>←</span>
            Tilbage til projekter
          </Link>

          <div className="mellemrum-hero-grid">
            {/* =====================================
                VENSTRE SIDE
            ====================================== */}

            <div className="mellemrum-hero-text">
              <p className="mellemrum-category">REACT · SUPABASE</p>

              <h1>MELLEMRUM</h1>

              <p className="mellemrum-script">Forbedret React-løsning</p>

              <div className="mellemrum-note">
                <div className="mellemrum-note-tape"></div>

                <p>
                  Mellemrum er en af de cases jeg arbejdet med i Product
                  Optimization, hvor jeg har arbejdet med at optimere og
                  videreudvikle en eksisterende React-kode, forbedre
                  accessibility og sikre datahåndtering gennem Supabase.
                </p>

                <a
                  href="https://laerke122333.github.io/mellemrum/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-live-link"
                >
                  Se live hjemmeside →
                </a>

                <a
                  href="https://github.com/laerke122333/portfolio-laerke-loenne.git"
                  target="_blank"
                  rel="noreferrer"
                  className="project-live-link"
                >
                  Github repository →
                </a>
              </div>
            </div>

            {/* =====================================
                HERO VIDEO
            ====================================== */}

            <div className="mellemrum-hero-image-area">
              <div className="mellemrum-image-blob"></div>

              <div className="mellemrum-browser">
                {/* BROWSER TOP */}

                <div className="mellemrum-browser-top">
                  <div className="browser-address">mellemrum.</div>
                </div>

                {/* VIDEO */}

                <video
                  className="mellemrum-hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source
                    src={`${import.meta.env.BASE_URL}videos/mellemrum.mp4`}
                    type="video/mp4"
                  />
                  Din browser understøtter ikke video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJEKT OVERBLIK
      ====================================================== */}

      <section className="mellemrum-overview">
        <div className="mellemrum-section-heading">
          <p>KORT FORTALT</p>

          <h2>PROJEKT OVERBLIK</h2>
        </div>

        <div className="mellemrum-overview-grid">
          {/* TYPE */}

          <article className="mellemrum-overview-card">
            <div className="mellemrum-overview-icon">◷</div>

            <div>
              <span>PROJEKTTYPE</span>

              <h3>Digital platform</h3>
            </div>
          </article>

          {/* ROLLE */}

          <article className="mellemrum-overview-card">
            <div className="mellemrum-overview-icon">✎</div>

            <div>
              <span>MIN ROLLE</span>

              <h3>Forbedring af eksistrende kode</h3>
            </div>
          </article>

          {/* TOOLS */}

          <article className="mellemrum-overview-card">
            <div className="mellemrum-overview-icon">&lt;/&gt;</div>

            <div>
              <span>VÆRKTØJER</span>

              <h3>React · Supabase</h3>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          OM PROJEKTET
      ====================================================== */}

      <section className="mellemrum-about">
        <div className="mellemrum-about-heading">
          <p>CASE STUDY</p>

          <h2>Casen og udfordringen</h2>
        </div>

        <div className="mellemrum-about-text">
          <p>
            Formålet med casen var at undersøge prototypen, prioritere de
            vigtigste problemer og gennemføre relevante forbedringer- og dermed
            vertificer deres effekt.
          </p>

          <p>
            Udfordringen med prototypen var, at prototypen havde nogle tekniske
            udfordringer, der påvirkede både brugeroplevelsen og
            vedligeholdelsen af koden. Derudover var der behov for at forbedre
            accessibility og sikre datahåndtering gennem Supabase.
          </p>
        </div>
      </section>

      {/* =====================================================
          CENTRALE FUNKTIONER
      ====================================================== */}

      <section className="mellemrum-features">
        <div className="mellemrum-section-heading">
          <p>LØSNINGEN</p>

          <h2>CENTRALE FUNKTIONER</h2>

          <p className="mellemrum-heading-description">
            Nogle af de vigtigste dele af den digitale løsning.
          </p>
        </div>

        {/* =====================================================
            01 UNDERSØGELSE OG PRIORITERING
        ====================================================== */}

        <article className="mellemrum-feature">
          {/* BILLEDE */}

          <div className="mellemrum-feature-image">
            <div className="feature-tape"></div>

            <img
              src={`${import.meta.env.BASE_URL}images/mellemrum-events.png`}
              alt="Eventoversigt i Mellemrum"
            />
          </div>

          {/* TEKST */}

          <div className="mellemrum-feature-text">
            <span className="feature-number">01</span>

            <h3>Undersøgelse og prioritering</h3>

            <p>
              Jeg tog udgangspunkt i den eksisterende React-løsning og
              undersøgte, hvilke områder der kunne forbedres teknisk. Jeg
              prioriterede kodeoptimering, accessibility og datasikkerhed, fordi
              de har betydning for henholdsvis løsningens vedligeholdelse,
              brugernes mulighed for at anvende siden og beskyttelsen af
              personlige oplysninger.
            </p>

            <p>
              I arbejdet med accessibility havde jeg fokus på at gøre løsningen
              mere tilgængelig og anvendelig for forskellige brugere. Samtidig
              undersøgte jeg, hvordan data blev hentet og håndteret gennem
              Supabase, og hvordan synligheden af brugeroplysninger kunne
              begrænses.
            </p>
          </div>
        </article>

        {/* =====================================================
            02 LØSNING OG FAGLIGE VALG
        ====================================================== */}

        <article className="mellemrum-feature mellemrum-feature-reverse">
          {/* BILLEDE */}

          <div className="mellemrum-feature-image">
            <div className="feature-tape"></div>

            <img
              src={`${import.meta.env.BASE_URL}images/kode.png`}
              alt="Opret event i Mellemrum"
            />
          </div>

          {/* TEKST */}

          <div className="mellemrum-feature-text">
            <span className="feature-number">02</span>

            <h3>Løsningen og faglige valg</h3>

            <p>
              Jeg har indsat billede af koden, hvor jeg har prioteret at vise
              fejlbeskeder, hvis der sker en fejl for brugeren.
            </p>

            <p>
              Jeg arbejdede med at optimere koden i React med fokus på en mere
              overskuelig og vedligeholdelsesvenlig opbygning. Her var det
              vigtigt at forholde mig til komponentstrukturen og til, hvordan
              løsningen kunne videreudvikles uden at gøre koden unødigt
              kompleks. I koden har jeg opdelt alle sider i komponenter, så de
              er nemmere at overskue og vedligeholde.
            </p>

            <p>
              I mit arbejde med accessibility, havde jeg bla. fokus på at
              udskifte billeder med third party cookies fra siden, for at øge
              sikkerheden og privatliv for brugeren. Jeg har også øget kontraten
              på tekst. For at optimere brugeroplevelsen har jeg gjort det
              muligt for brugeren at oprette events, logge ind og ud og se hvor
              mange ledige pladser der er på hver event.
            </p>

            <p>
              Et tredje fokusområde var sikker datahåndtering gennem Supabase.
              Jeg arbejdede med at begrænse synligheden af navne og oplysninger
              om tilmeldte, så andre brugere ikke skulle kunne se oplysninger,
              de ikke havde behov for eller tilladelse til at tilgå.
            </p>
          </div>
        </article>

        {/* =====================================================
            03 RESULTAT OG DOKUMENTATION
        ====================================================== */}

        <article className="mellemrum-feature">
          {/* BILLEDE */}

          <div className="mellemrum-feature-image">
            <div className="feature-tape"></div>

            <img
              src={`${import.meta.env.BASE_URL}images/mellemrum-profil.png`}
              alt="Profil og tilmeldinger i Mellemrum"
            />
          </div>

          {/* TEKST */}

          <div className="mellemrum-feature-text">
            <span className="feature-number">03</span>

            <h3>Resultat og dokumentation</h3>

            <p>
              Arbejdet resulterede i en videreudviklet React-løsning med fokus
              på kodekvalitet, accessibility og sikker datahåndtering. Jeg har
              gjort koden mere overskuelig og vedligeholdelsesvenlig, forbedret
              tilgængeligheden for brugerne og begrænset synligheden af
              personlige oplysninger gennem Supabase.
            </p>
          </div>
        </article>

        {/* =====================================================
            02 FAGLIG REFLEKTION
        ====================================================== */}

        <article className="mellemrum-feature mellemrum-feature-reverse">
          {/* VIDEO */}

          <div className="mellemrum-feature-image">
            <div className="feature-tape"></div>

            <video
              className="mellemrum-feature-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src={`${import.meta.env.BASE_URL}videos/tilgængelighed.mp4`}
                type="video/mp4"
              />
              Din browser understøtter ikke video.
            </video>
          </div>

          {/* TEKST */}

          <div className="mellemrum-feature-text">
            <span className="feature-number">02</span>

            <h3>Faglig reflektion</h3>

            <p>
              Arbejdet med Mellemrum har styrket min forståelse for, at
              produktoptimering ikke kun handler om brugergrænsefladens
              udseende, men også om den tekniske kvalitet bag løsningen. En
              velstruktureret kodebase gør det lettere at vedligeholde og
              videreudvikle produktet, mens accessibility kan gøre det
              anvendeligt for flere mennesker.
            </p>

            <p>
              Værdien af forbedringerne ligger derfor både i en mere
              vedligeholdelsesvenlig løsning, bedre tilgængelighed for brugerne
              og en mere ansvarlig håndtering af deres oplysninger. Det er
              vigtigt, fordi en digital løsning ikke kun skal fungere teknisk,
              men også være tilgængelig og behandle brugernes data forsvarligt.
            </p>
          </div>
        </article>
      </section>

      {/* =====================================================
          PROCESSEN
      ====================================================== */}

      <section className="mellemrum-process">
        <div className="mellemrum-section-heading">
          <h2>Arbejdsprocess</h2>
        </div>

        <div className="mellemrum-process-grid">
          {/* 01 */}

          <article className="mellemrum-process-step">
            <span className="process-step-number">01</span>

            <div className="process-step-icon">⌕</div>

            <h3>Analyse</h3>

            <p>
              Gennemgang af den eksisterende React-løsning, koden og de områder,
              der kunne forbedres.
            </p>
          </article>

          <div className="process-connector">→</div>

          {/* 02 */}

          <article className="mellemrum-process-step">
            <span className="process-step-number">02</span>

            <div className="process-step-icon">✦</div>

            <h3>Prioritering</h3>

            <p>
              Udvælgelse af forbedringer med fokus på kodekvalitet,
              tilgængelighed og sikkerhed.
            </p>
          </article>

          <div className="process-connector">→</div>

          {/* 03 */}

          <article className="mellemrum-process-step">
            <span className="process-step-number">03</span>

            <div className="process-step-icon">▱</div>

            <h3>Kodeoptimering</h3>

            <p>
              Forbedring af React-koden med fokus på struktur, overskuelighed og
              vedligeholdelse.
            </p>
          </article>

          <div className="process-connector">→</div>

          {/* 04 */}

          <article className="mellemrum-process-step">
            <span className="process-step-number">04</span>

            <div className="process-step-icon">&lt;/&gt;</div>

            <h3>Accessibility</h3>

            <p>
              Forbedring af sidens tilgængelighed, så flere brugere kan anvende
              løsningen.
            </p>
          </article>

          <div className="process-connector">→</div>

          {/* 05 */}

          <article className="mellemrum-process-step">
            <span className="process-step-number">05</span>

            <div className="process-step-icon">◉</div>

            <h3>Supabase & sikkerhed</h3>

            <p>
              Håndtering af data og begrænsning af andre brugeres adgang til
              tilmeldtes oplysninger.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          RESULTAT
      ====================================================== */}

      <section className="mellemrum-results">
        <div className="mellemrum-result-shape"></div>

        <div className="mellemrum-section-heading">
          <p>DEN ENDELIGE LØSNING</p>

          <h2>RESULTATET</h2>

          <p className="mellemrum-results-script">
            Det vigtigste fra løsningen
          </p>
        </div>

        <div className="mellemrum-results-grid">
          {/* RESULTAT 1 */}

          <article className="mellemrum-result-card">
            <span className="mellemrum-result-icon">▦</span>

            <h3>Optimeret kode</h3>

            <p>
              Jeg har forbedret React-koden med fokus på en mere overskuelig
              struktur og lettere vedligeholdelse.
            </p>
          </article>

          {/* RESULTAT 2 */}

          <article className="mellemrum-result-card">
            <span className="mellemrum-result-icon">✓</span>

            <h3>Bedre tilgængelighed</h3>

            <p>
              Jeg har optimeret koden med fokus på accessibility, så sidens
              struktur og funktioner bliver mere tilgængelige og lettere at
              navigere i for forskellige brugere.
            </p>
          </article>

          {/* RESULTAT 3 */}

          <article className="mellemrum-result-card">
            <span className="mellemrum-result-icon">✦</span>

            <h3>Sikker datahåndtering</h3>

            <p>
              Jeg har arbejdet med Supabase for at beskytte tilmeldtes
              oplysninger, så brugernes personlige data ikke er synlige for
              andre.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          MIN UDVIKLING
      ====================================================== */}

      <section className="mellemrum-learning">
        <div>
          <p className="learning-small-title">MIN UDVIKLING</p>

          <h2>Hvad tog jeg med mig?</h2>
        </div>

        <div className="learning-text">
          <p>
            Arbejdet med Mellemrum har givet mig en større forståelse for
            Supabase og datahåndtering, herunder hvordan data kan håndteres
            sikkert, og hvordan brugeroplysninger beskyttes.
          </p>

          <p>
            Jeg har desuden fået erfaring med at sætte mig ind i en eksisterende
            kodebase, identificere områder med forbedringspotentiale og optimere
            koden med fokus på struktur, vedligeholdelse og accessibility. Et
            relevant næste skridt ville være at gennemføre yderligere
            accessibility-tests og systematisk teste adgangsreglerne i Supabase.
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

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer onContact={onContact} />
    </div>
  );
}
