import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Mellemrum({ onContact }) {
  return (
    <div className="mellemrum-page">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header onContact={onContact} />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="mellemrum-hero">
        <div className="mellemrum-hero-shape"></div>

        <div className="mellemrum-hero-dots">
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

        <span className="mellemrum-hero-star">✳</span>

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
              <p className="mellemrum-category">UX/UI · REACT · SUPABASE</p>

              <h1>MELLEMRUM</h1>

              <p className="mellemrum-script">Mit seneste projekt</p>

              <div className="mellemrum-note">
                <div className="mellemrum-note-tape"></div>

                <p>
                  En digital eventplatform, hvor brugere kan finde
                  arrangementer, tilmelde sig og selv oprette events.
                </p>
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
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

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
                  <source src="/videos/mellemrum.mp4" type="video/mp4" />
                  Din browser understøtter ikke video.
                </video>
              </div>

              <span className="mellemrum-arrow">↗</span>
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

              <h3>UX/UI & udvikling</h3>
            </div>
          </article>

          {/* TOOLS */}

          <article className="mellemrum-overview-card">
            <div className="mellemrum-overview-icon">&lt;/&gt;</div>

            <div>
              <span>VÆRKTØJER</span>

              <h3>Figma · React · Supabase</h3>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          OM PROJEKTET
      ====================================================== */}

      <section className="mellemrum-about">
        <span className="mellemrum-about-star">✳</span>

        <div className="mellemrum-about-heading">
          <p>CASE STUDY</p>

          <h2>OM PROJEKTET</h2>
        </div>

        <div className="mellemrum-about-text">
          <p>
            Mellemrum er en digital eventplatform, der skal gøre det nemt at
            finde arrangementer og skabe nye fællesskaber.
          </p>

          <p>
            Brugeren kan se kommende events, dato, placering og antal ledige
            pladser og derefter tilmelde eller afmelde sig direkte på siden.
          </p>

          <p>
            Derudover er det muligt at oprette egne events og administrere sin
            profil. Projektet kombinerer derfor både UX/UI-design,
            frontendudvikling og arbejde med data og brugerinformation.
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
            01 EVENTOVERSIGT
        ====================================================== */}

        <article className="mellemrum-feature">
          {/* BILLEDE */}

          <div className="mellemrum-feature-image">
            <div className="feature-tape"></div>

            <img
              src="/images/mellemrum-opret.png"
              alt="Eventoversigt i Mellemrum"
            />
          </div>

          {/* TEKST */}

          <div className="mellemrum-feature-text">
            <span className="feature-number">01</span>

            <p className="feature-label">EVENTS</p>

            <h3>Overblik over arrangementer</h3>

            <p>
              På eventoversigten kan brugeren hurtigt se kommende arrangementer,
              hvor de foregår, datoen og hvor mange pladser der er tilbage.
            </p>

            <p>
              Tilmeldingsstatussen er synlig direkte i oversigten, så brugeren
              ikke behøver åbne hvert event for at få overblik.
            </p>
          </div>
        </article>

        {/* =====================================================
            02 OPRET EVENT
        ====================================================== */}

        <article className="mellemrum-feature mellemrum-feature-reverse">
          {/* BILLEDE */}

          <div className="mellemrum-feature-image">
            <div className="feature-tape"></div>

            <img
              src="/images/mellemrum-profil.png"
              alt="Opret event i Mellemrum"
            />
          </div>

          {/* TEKST */}

          <div className="mellemrum-feature-text">
            <span className="feature-number">02</span>

            <p className="feature-label">OPRET EVENT</p>

            <h3>Brugerne kan selv skabe arrangementer</h3>

            <p>
              En central funktion i løsningen er, at brugerne selv kan oprette
              nye events.
            </p>

            <p>
              Formularen er designet til at gøre processen enkel og overskuelig,
              så brugeren hurtigt kan tilføje de vigtigste oplysninger om
              eventet.
            </p>
          </div>
        </article>

        {/* =====================================================
            03 PROFIL / TILMELDINGER
        ====================================================== */}

        <article className="mellemrum-feature">
          {/* BILLEDE */}

          <div className="mellemrum-feature-image">
            <div className="feature-tape"></div>

            <img
              src="/images/mellemrum-events.png"
              alt="Tilmeldinger i Mellemrum"
            />
          </div>

          {/* TEKST */}

          <div className="mellemrum-feature-text">
            <span className="feature-number">03</span>

            <p className="feature-label">TILMELDINGER</p>

            <h3>Personligt overblik</h3>

            <p>
              Brugeren får et samlet overblik over arrangementer og kan se sin
              aktuelle tilmeldingsstatus.
            </p>

            <p>
              Det gør det lettere at holde styr på kommende events og giver
              brugeren en mere personlig oplevelse af platformen.
            </p>
          </div>
        </article>
      </section>

      {/* =====================================================
          PROCESSEN
      ====================================================== */}

      <section className="mellemrum-process">
        <div className="mellemrum-section-heading">
          <p>FRA IDÉ TIL LØSNING</p>

          <h2>PROCESSEN</h2>
        </div>

        <div className="mellemrum-process-grid">
          {/* 01 */}

          <article className="mellemrum-process-step">
            <span className="process-step-number">01</span>

            <div className="process-step-icon">⌕</div>

            <h3>Research</h3>

            <p>Undersøgelse af målgruppe, behov og problemstilling.</p>
          </article>

          <div className="process-connector">→</div>

          {/* 02 */}

          <article className="mellemrum-process-step">
            <span className="process-step-number">02</span>

            <div className="process-step-icon">✦</div>

            <h3>Idé</h3>

            <p>Koncept og funktioner blev defineret ud fra indsigterne.</p>
          </article>

          <div className="process-connector">→</div>

          {/* 03 */}

          <article className="mellemrum-process-step">
            <span className="process-step-number">03</span>

            <div className="process-step-icon">▱</div>

            <h3>UX/UI</h3>

            <p>Struktur, wireframes og det visuelle design blev udviklet.</p>
          </article>

          <div className="process-connector">→</div>

          {/* 04 */}

          <article className="mellemrum-process-step">
            <span className="process-step-number">04</span>

            <div className="process-step-icon">&lt;/&gt;</div>

            <h3>Udvikling</h3>

            <p>Designet blev omsat til en løsning i React.</p>
          </article>

          <div className="process-connector">→</div>

          {/* 05 */}

          <article className="mellemrum-process-step">
            <span className="process-step-number">05</span>

            <div className="process-step-icon">◉</div>

            <h3>Database</h3>

            <p>Supabase håndterer data, brugere og events.</p>
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

            <h3>Bedre overblik</h3>

            <p>
              Events og information er samlet i en enkel og overskuelig
              struktur.
            </p>
          </article>

          {/* RESULTAT 2 */}

          <article className="mellemrum-result-card">
            <span className="mellemrum-result-icon">✓</span>

            <h3>Nem tilmelding</h3>

            <p>
              Brugeren kan hurtigt se ledige pladser og tilmelde sig direkte fra
              platformen.
            </p>
          </article>

          {/* RESULTAT 3 */}

          <article className="mellemrum-result-card">
            <span className="mellemrum-result-icon">✦</span>

            <h3>Aktivt fællesskab</h3>

            <p>
              Muligheden for selv at oprette events gør brugeren til en aktiv
              del af platformen.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          MIN UDVIKLING
      ====================================================== */}

      <section className="mellemrum-learning">
        <div className="learning-decoration">✳</div>

        <div>
          <p className="learning-small-title">MIN UDVIKLING</p>

          <h2>Hvad tog jeg med mig?</h2>
        </div>

        <div className="learning-text">
          <p>
            Projektet har givet mig mere erfaring med at koble design og
            udvikling sammen i én samlet digital løsning.
          </p>

          <p>
            Jeg har blandt andet arbejdet med React, Supabase, datahåndtering og
            med at omsætte et design fra Figma til en fungerende
            brugeroplevelse.
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
