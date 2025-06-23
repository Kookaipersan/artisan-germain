import React, { useEffect, useState } from "react";
import axios from "axios";

function TopArtisans() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
   axios.get("https://artisan-germain-backend.onrender.com/api/artisans/top")

      .then(res => setArtisans(res.data))
      .catch(err => console.error("Erreur API :", err));
  }, []);

  return (
    <div className="row">
      {artisans.map(artisan => (
        <div className="col-md-4 mb-4" key={artisan.id}>
          <div className="card h-100 shadow">
            <img
             src={`https://artisan-germain-backend.onrender.com/images/${artisan.image}`}

              alt={artisan.nom}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{artisan.nom}</h5>
              <p className="card-text">
                Note : {artisan.note} ★ <br />
                {artisan.specialite_id && `Spécialité #${artisan.specialite_id}`}<br />
                Ville : {artisan.ville}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopArtisans;
