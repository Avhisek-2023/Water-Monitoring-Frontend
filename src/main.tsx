import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PlayGroundRouter from "./routes/PlayGroundRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PlayGroundRouter />
    </BrowserRouter>
  </StrictMode>
);
