import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

function HomePage() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/artisans")
      .then((res) => res.json())
      .then((data) => {
        setArtisans(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* Étapes */}
      <section className="steps-section py-5">
        <h2 className="steps-title">Comment trouver mon artisan ?</h2>
        <div className="row g-4 justify-content-center">
          {[1, 2, 3, 4].map((num) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={num}>
              <div className="step-card p-3 h-100">
                <div className="step-number fw-bold">{num}</div>
                <h5 className="step-title mt-2">
                  {["Choisir la catégorie", "Choisir un artisan", "Le contacter", "Recevoir une réponse"][num - 1]}
                </h5>
                <p className="step-desc">
                  {
                    [
                      "Choisir la catégorie d’artisanat dans le menu.",
                      "Parcourez les artisans disponibles et cliquez sur celui de votre choix.",
                      "Utilisez le formulaire pour poser vos questions ou demander un devis.",
                      "Une réponse vous sera apportée dans un délai de 48h.",
                    ][num - 1]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artisans du mois */}
      <section className="top-artisan-section py-5">
        <div className="text-center mb-4">
          <div className="green-line mx-auto mb-2"></div>
          <h2 className="top-artisans-title">Les artisans du mois les mieux notés</h2>
        </div>

        <div className="row g-4">
          {artisans
            .filter((artisan) => Number(artisan.top) === 1)
            .slice(0, 4) // ← 4 artisans max
            .map((artisan) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={artisan.id}>
                <Link to={`/artisan/${artisan.id}`} className="text-decoration-none text-dark">
                  <div className="artisan-card p-3 h-100 text-center position-relative">
                    <img
                      src="/assets/images/favicon.png"
                      alt="icon"
                      className="artisan-favicon"
                    />
                    <h5 className="artisan-name mt-4">{artisan.nom}</h5>
                    <p className="artisan-specialite">{artisan.specialite?.nom || "Spécialité non définie"}</p>
                    <p className="artisan-ville">{artisan.ville}</p>
                    <div className="artisan-note">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>{i < Math.round(artisan.note) ? "★" : "☆"}</span>
                      ))}{" "}
                      <span className="note-value">{artisan.note} / 5</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
