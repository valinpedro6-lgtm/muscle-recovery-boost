import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Index } from "./routes/index";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Missing #root element in the static Pages document.");
}

createRoot(root).render(
  <StrictMode>
    <Index />
  </StrictMode>,
);
