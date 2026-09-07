import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App";

import "./styles/global.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/contact-overlay.css";
import "./styles/home.css";
import "./styles/project.css";
import "./styles/projects.css";
import "./styles/mellemrum.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
