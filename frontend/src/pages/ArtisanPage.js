import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArtisanPage.scss";

function ArtisanPage() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
fetch(`https://artisan-germain-backend.onrender.com/api/artisans/${id}`)
      .then((res) => res.json())
      .then((data) => setArtisan(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!artisan) return <div className="text-center">Chargement...</div>;

  return (
    <div className="container artisan-page py-5">
      <div className="row g-4">
        {/* Colonne gauche : image + infos */}
        <div className="col-lg-8">
          <div className="artisan-info card p-4">
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src="https://artisan-germain-backend.onrender.com/images/artisan.jpg"

                  alt={artisan.nom}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-8">
                <h2>{artisan.nom}</h2>
                <p className="text-muted">{artisan.specialite?.nom}</p>
                <p>
                  📍 {artisan.ville} <br />
                  📧 {artisan.email || "Email non renseigné"} <br />
                  🌐{" "}
                  {artisan.site ? (
                    <a href={artisan.site}>Site web</a>
                  ) : (
                    "Aucun site"
                  )}
                </p>
                <div className="artisan-note">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < Math.round(artisan.note) ? "★" : "☆"}
                    </span>
                  ))}{" "}
                  <span>{artisan.note || "4.5"} / 5</span>
                </div>
              </div>
            </div>
            <hr />
            <h4>À propos</h4>
            <p>{artisan.a_propos || "Pas encore de description."}</p>
          </div>
        </div>

        {/* Colonne droite : Formulaire */}
        <div className="col-lg-4">
          <div className="contact-form card p-4">
            <h4>Contacter {artisan.nom}</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="objet">Objet</label>
                <input
                  type="text"
                  className="form-control"
                  id="objet"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtisanPage;
