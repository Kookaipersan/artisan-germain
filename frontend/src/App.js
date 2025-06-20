import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import BatimentPage from "./pages/BatimentPage";
import ServicesPage from "./pages/ServicesPage";
import FabricationPage from "./pages/FabricationPage";
import AlimentationPage from "./pages/AlimentationPage";
import ArtisanPage from "./pages/ArtisanPage";
import NotFound from "./pages/NotFound";
import RecherchePage from "./pages/RecherchePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UnderConstructionPage from "./pages/UnderConstructionPage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <Router>
      <Header />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categorie/batiment" element={<BatimentPage />} />
          <Route path="/categorie/services" element={<ServicesPage />} />
          <Route path="/categorie/fabrication" element={<FabricationPage />} />
          <Route
            path="/categorie/alimentation"
            element={<AlimentationPage />}
          />
          <Route path="/mentions-legales" element={<UnderConstructionPage />} />
          <Route path="/donnees-personnelles" element={<NotFoundPage />} />
          <Route path="/accessibilite" element={<NotFoundPage />} />
          <Route path="/cookies" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/artisan/:id" element={<ArtisanPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/recherche/:motcle" element={<RecherchePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
