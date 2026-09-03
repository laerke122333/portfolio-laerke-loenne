export default function Footer({ onContact }) {
  return (
    <footer className="portfolio-footer">
      {/* Dekoration */}
      <div className="footer-shape"></div>

      <div className="footer-dots">
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

      <div className="footer-star">✳</div>

      <div className="portfolio-footer-content">
        {/* VENSTRE SIDE */}

        <div className="footer-about">
          <div className="footer-name">
            

            <h2>Lærke Theodine Lønne</h2>
          </div>

          <p>
            Multimediedesigner med fokus på visuel kommunikation,
            brugeroplevelser og digitale løsninger, der skaber værdi.
          </p>

          <div className="footer-socials">
            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/l%C3%A6rke-l%C3%B8nne-109a29427/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <img src="/images/in.png" alt="LinkedIn" />
            </a>

            {/* MAIL */}

            <a
              href="mailto:laerke122333@icloud.com"
              aria-label="Send mail"
              className="footer-social-link"
            >
              <img src="/images/mail.png" alt="Mail" />
            </a>
          </div>
        </div>

        {/* SKILLELINJE */}

        <div className="footer-divider"></div>

        {/* KONTAKT */}

        <div className="footer-contact">
          <p className="footer-small-title">KONTAKT</p>

          <h3>
            Har du et projekt
            <br />
            eller et spørgsmål?
          </h3>

          <p>
            Jeg hører meget gerne
            <br />
            fra dig.
          </p>

          {/* SAMME OVERLAY SOM NAVBAR */}

          <button
            type="button"
            className="footer-contact-btn"
            onClick={onContact}
          >
            Kontakt
            <span>→</span>
          </button>
        </div>
      </div>

      {/* BØLGE */}

      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="
              M0,70
              C250,100 350,15 590,50
              C830,85 930,105 1150,65
              C1280,42 1360,42 1440,55
            "
            fill="none"
            stroke="#9bbce8"
            strokeWidth="3"
          />
        </svg>
      </div>
    </footer>
  );
}
