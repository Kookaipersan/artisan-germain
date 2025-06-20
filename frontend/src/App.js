import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ArtisanPage from "./pages/ArtisanPage";
import NotFound from "./pages/NotFound";
import RecherchePage from "./pages/RecherchePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
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


