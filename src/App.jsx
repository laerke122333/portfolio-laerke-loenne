import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

import Reset from "./pages/Reset";
import North from "./pages/North";
import Spilcafe from "./pages/Spilcafe";
import StorcenterNord from "./pages/StorcenterNord";

import ContactOverlay from "./components/ContactOverlay";

/* =====================================
   SCROLL TIL TOPPEN VED SIDESKIFT
===================================== */

function ScrollHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

/* =====================================
   APP
===================================== */

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  /* =====================================
     STOP SCROLL BAG KONTAKT OVERLAY
  ===================================== */

useEffect(() => {
  if (contactOpen) {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  return () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };
}, [contactOpen]);

  return (
    <>
      <ScrollHandler />

      {/* =====================================
          ROUTES
      ===================================== */}

      <Routes>
        {/* FORSIDE */}

        <Route
          path="/"
          element={<Home onContact={() => setContactOpen(true)} />}
        />

        {/* PROJEKTER OVERSIGT */}

        <Route
          path="/projekter"
          element={<Projects onContact={() => setContactOpen(true)} />}
        />

        {/* RESET */}

        <Route
          path="/projekter/reset"
          element={<Reset onContact={() => setContactOpen(true)} />}
        />

        {/* NORTH */}

        <Route
          path="/projekter/north"
          element={<North onContact={() => setContactOpen(true)} />}
        />

        {/* SPILCAFÉ */}

        <Route
          path="/projekter/spilcafe"
          element={<Spilcafe onContact={() => setContactOpen(true)} />}
        />

        {/* STORCENTER NORD */}

        <Route
          path="/projekter/storcenter-nord"
          element={<StorcenterNord onContact={() => setContactOpen(true)} />}
        />
      </Routes>

      {/* =====================================
          KONTAKT OVERLAY
      ===================================== */}

      <ContactOverlay
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
