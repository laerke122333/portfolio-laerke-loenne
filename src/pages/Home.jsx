import { Link } from "react-router-dom";
import { Lottie } from "lottie-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home({ onContact }) {
  return (
    <div className="home-page">
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Header onContact={onContact} />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="portfolio-hero">
        <div className="hero-background-circle"></div>

        {/* PRIKKER */}

        <div className="hero-dots hero-dots-left">
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

        <div className="hero-content">
          {/* VENSTRE SIDE */}

          <div className="hero-text">
            <h1>PORTFOLIO</h1>

            <p className="hero-script">Multimediedesigner</p>

            <div className="hero-description">
              <p>
                Jeg skaber digitale løsninger, hvor design og funktion går hånd
                i hånd.
              </p>

              <p>
                Jeg er multimediedesignstuderende med en nysgerrig tilgang til
                både design og programmering.
              </p>
            </div>

            {/* LINK TIL PROJEKTER */}

            <div className="hero-buttons">
              <Link to="/projekter" className="primary-button">
                Se projekter
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* DESIGN TEKST */}

          <div className="design-repeat">
            <span>DESIGN</span>

            <span>DESIGN</span>

            <span>DESIGN</span>
          </div>

          {/* HERO FOTO */}

          <div className="hero-photo">
            <div className="hero-tape"></div>

            <img src="/images/migigen.png" alt="Lærke Theodine Lønne" />
          </div>

          <div className="hero-decoration-star">✳</div>
        </div>
      </section>

      {/* =====================================================
          OM MIG
      ====================================================== */}

      <section className="home-about">
        <div className="home-about-decoration">✳</div>

        {/* FOTO */}

        <div className="home-about-image">
          <div className="about-image-tape"></div>

          <img src="/images/profilbillede.JPG" alt="Lærke" />
        </div>

        {/* TEKST */}

        <div className="home-about-intro">
          <p className="handwritten-title">Hello!</p>

          <h2>OM MIG</h2>

          <p>
            Jeg er multimediedesignstuderende med en nysgerrig tilgang til både
            design og programmering.
          </p>

          <p>
            Jeg brænder for at skabe digitale løsninger, hvor design og funktion
            går hånd i hånd. Jeg er nysgerrig og meget interesseret i andres
            idéer og tanker.
          </p>

          <p>Jeg er nærværende, lyttende og motiveres af at udvikle mig.</p>
        </div>
      </section>

      {/* =====================================================
          HARD SKILLS + SOFT SKILLS
      ====================================================== */}

      <section className="about-cards">
        {/* HARD SKILLS */}

        <article className="about-card about-card-blue">
          <div className="about-card-icon">
            <img src="/images/hardskills.png" alt="Hard skills" />
          </div>

          <div className="about-card-content">
            <h2>HARD SKILLS</h2>

            <div className="heading-line"></div>

            <p>
              Jeg har under min uddannelse udviklet stor interesse og forståelse
              for Figma – UX/UI-design, prototyping og designsystemer.
            </p>

            <div className="skills-tags">
              <span>Figma</span>

              <span>UX/UI</span>

              <span>Prototyping</span>

              <span>Designsystemer</span>

              <span>React</span>
            </div>
          </div>
        </article>

        {/* SOFT SKILLS */}

        <article className="about-card about-card-blue">
          <div className="about-card-icon">
            <img src="/images/softskills.png" alt="Soft skills" />
          </div>

          <div className="about-card-content">
            <h2>SOFT SKILLS</h2>

            <div className="heading-line"></div>

            <p>
              I min fritid spiller jeg meget golf. Udover at spille med venner
              og bekendte har jeg været med til at starte et ungefællesskab i
              min klub.
            </p>

            <p>
              Her er vores formål at skabe et større fællesskab for unge i
              klubben og afholde turneringer. Jeg har også været frivillig på en
              pigegolfcamp i Himmerland.
            </p>
          </div>
        </article>
      </section>

      {/* =====================================================
          PERSONLIGHEDSPROFIL
      ====================================================== */}

      <section className="personality-section">
        {/* IKON */}

        <div className="personality-icon">
          <img src="/images/personlighedprofil.png" alt="Personlighedsprofil" />
        </div>

        {/* TEKST */}

        <div className="personality-text">
          <h2>PERSONLIGHEDSPROFIL</h2>

          <div className="heading-line"></div>

          <p>
            På en arbejdsplads trives jeg godt i samarbejde, men jeg fungerer
            også godt med selvstændige opgaver. Jeg er god til at holde overblik
            og arbejde struktureret.
          </p>

          <p>
            I gruppearbejde bidrager jeg med struktur, effektivitet og åbenhed
            over for andres idéer. Jeg har en god forståelse for blandt andet
            Figma og den visuelle proces.
          </p>
        </div>

        <span className="personality-star">✳</span>
      </section>

      {/* =====================================================
          MIG SOM PERSON
      ====================================================== */}

      <section className="person-section">
        {/* IKON */}

        <div className="person-icon">
          <img src="/images/migsomperson.png" alt="Mig som person" />
        </div>

        {/* TEKST */}

        <div className="person-text">
          <h2>MIG SOM PERSON</h2>

          <div className="heading-line"></div>

          <p>
            I min fritid spiller jeg meget golf. Udover at spille med venner og
            bekendte har jeg været med til at starte et ungefællesskab i min
            klub.
          </p>

          <p>
            Her er vores formål at skabe et større fællesskab for unge i klubben
            og afholde turneringer.
          </p>

          <p>Jeg har også været frivillig på en pigegolfcamp i Himmerland.</p>
        </div>

      
      </section>

      {/* =====================================================
          LOTTIE ANIMATION
          LIGGER DIREKTE UNDER "MIG SOM PERSON"
      ====================================================== */}

      <section className="home-lottie-section">
        <div className="home-lottie-decoration">✳</div>

        <div className="home-lottie-wrapper">
          <Lottie
            src="/lottie/Scene.json"
            autoplay
            loop
            className="home-lottie-animation"
          />
        </div>
      </section>

      {/* =====================================================
          MINE STYRKER
      ====================================================== */}

      <section className="strengths-section">
        <div className="section-small-title">DET JEG BRÆNDER FOR</div>

        <h2>Mine styrker</h2>

        <div className="strengths-grid">
          {/* DESIGN */}

          <article className="strength-item">
            <div className="strength-icon">✎</div>

            <div>
              <h3>Design</h3>

              <p>
                Jeg arbejder med UX/UI, Figma, prototyping og visuelle
                løsninger.
              </p>
            </div>
          </article>

          {/* SAMARBEJDE */}

          <article className="strength-item">
            <div className="strength-icon">♡</div>

            <div>
              <h3>Samarbejde</h3>

              <p>
                Jeg er åben for andres idéer og bidrager til en god dynamik.
              </p>
            </div>
          </article>

          {/* STRUKTUR */}

          <article className="strength-item">
            <div className="strength-icon">▦</div>

            <div>
              <h3>Struktur</h3>

              <p>
                Jeg er god til at holde overblik, arbejde effektivt og følge en
                tidsplan.
              </p>
            </div>
          </article>

          {/* NYSGERRIGHED */}

          <article className="strength-item">
            <div className="strength-icon">✦</div>

            <div>
              <h3>Nysgerrighed</h3>

              <p>
                Jeg interesserer mig for nye idéer, mennesker og måder at løse
                problemer på.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer onContact={onContact} />
    </div>
  );
}
