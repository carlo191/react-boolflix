import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import * as bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
