import React, { useEffect, useState } from "react";
import "./ServicesPage.scss";
import { Link } from "react-router-dom";


function ServicesPage() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch("https://artisan-germain-backend.onrender.com/api/artisans")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((artisan) =>
          [12, 13, 14, 15].includes(artisan.specialite_id) // à ajuster selon ta BDD
        );
        setArtisans(filtered);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="services-section py-5">
      <div className="text-center mb-4">
        <h2 className="services-title">Artisans des Services</h2>
        <div className="green-line mx-auto mb-2"></div>
      </div>

      <div className="row g-4 justify-content-center">
        {artisans.map((artisan) => (
         <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={artisan.id}>
  <Link to={`/artisan/${artisan.id}`} className="text-decoration-none text-dark">
    <div className="artisan-card p-3 h-100 text-center position-relative">
      <img src="/assets/images/favicon.png" alt="icon" className="artisan-favicon" />
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
  );
}

export default ServicesPage;
