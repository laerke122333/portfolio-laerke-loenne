import { useEffect } from "react";

export default function ContactOverlay({ open, onClose }) {
  /* =========================
     ESCAPE LUKKER OVERLAY
  ========================= */

  useEffect(() => {
    if (!open) return;

    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  /* VIS IKKE OVERLAY HVIS DET ER LUKKET */

  if (!open) {
    return null;
  }

  return (
    <div
      className="contact-overlay"
      onMouseDown={(event) => {
        /* Klik udenfor boksen lukker overlay */
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
      >
        {/* =====================================
            DEKORATIONER
        ====================================== */}

        <div className="contact-blue-shape"></div>

        <div className="contact-bottom-shape"></div>

        <div className="contact-dots contact-dots-top">
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

        <div className="contact-dots contact-dots-bottom">
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

        <span className="contact-decoration-star contact-star-left">✳</span>

        <span className="contact-decoration-star contact-star-right">✳</span>

        <div className="contact-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* =====================================
            LUK KNAP
        ====================================== */}

        <button
          type="button"
          className="contact-close"
          onClick={onClose}
          aria-label="Luk kontaktvindue"
        >
          ×
        </button>

        {/* =====================================
            CONTENT
        ====================================== */}

        <div className="contact-modal-content">
          {/* =====================================
              VENSTRE SIDE
          ====================================== */}

          <div className="contact-info">
            <h2 id="contact-title">
              Mangler du en
              <br />
              praktikant?
            </h2>

            <p className="contact-intro">
              Jeg vil meget gerne høre fra jer,
              <br />
              hvis I søger en kreativ og
              <br />
              engageret praktikant.
            </p>

            {/* KONTAKTOPLYSNINGER */}

            <div className="contact-details">
              {/* TELEFON */}

              <a href="tel:+4522528573" className="contact-detail">
                <span className="contact-detail-icon">☎</span>

                <span className="contact-detail-text">
                  <strong>Telefon:</strong>
                  <span>+45 22 25 85 73</span>
                </span>
              </a>

              {/* MAIL */}

              <a
                href="mailto:laerke122333@icloud.com"
                className="contact-detail"
              >
                <span className="contact-detail-icon">✉</span>

                <span className="contact-detail-text">
                  <strong>Mail:</strong>
                  <span>laerke122333@icloud.com</span>
                </span>
              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/l%C3%A6rke-l%C3%B8nne-109a29427/"
                target="_blank"
                rel="noreferrer"
                className="contact-detail"
              >
                <span className="contact-linkedin-icon">in</span>

                <span className="contact-detail-text">
                  <strong>LinkedIn:</strong>
                  <span className="contact-blue-link">Min profil</span>
                </span>
              </a>
            </div>

            {/* BUNDTEKST */}

            <div className="contact-bottom">
              <p className="contact-message">Lad os tage en snak! ♡</p>

              <div className="contact-hand-arrow">↝</div>
            </div>
          </div>

          {/* =====================================
              HØJRE SIDE
          ====================================== */}

          <div className="contact-photo-area">
            <div className="contact-photo">
              <div className="contact-tape"></div>

              <img src="/images/profilbillede.JPG" alt="Lærke Theodine Lønne" />
            </div>

            {/* CTA KNAP */}

            <a href="mailto:laerke122333@icloud.com" className="contact-write">
              Skriv til mig
              <span>→</span>
            </a>
          </div>
        </div>

        {/* BØLGE */}

        <div className="contact-wave">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path
              d="
                M0,65
                C160,100 260,25 420,60
                C590,95 670,85 820,45
                C900,25 950,30 1000,45
              "
              fill="none"
              stroke="#9bbce8"
              strokeWidth="3"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
