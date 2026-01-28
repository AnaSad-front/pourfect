import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import CandleCalculator from "./components/calculators/CandleCalculator.jsx";
import ReedDiffuserCalculator from "./components/calculators/ReedDiffuserCalculator.jsx";
import GypsumCalculator from "./components/calculators/GypsumCalculator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<CandleCalculator />} />
          <Route path="diffuser" element={<ReedDiffuserCalculator />} />
          <Route path="gypsum" element={<GypsumCalculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
