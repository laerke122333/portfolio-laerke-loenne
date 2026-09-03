import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/global.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/contact-overlay.css";
import "./styles/home.css";
import "./styles/project.css";
import "./styles/projects.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
