import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecherchePage() {
  const { motcle } = useParams(); // récupère "boulanger", "coiffeur", etc.
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/artisans")
      .then((res) => res.json())
      .then((data) => {
        // filtre par specialite.nom
        const resultat = data.filter((artisan) =>
          artisan.specialite?.nom.toLowerCase().includes(motcle.toLowerCase())
        );
        setArtisans(resultat);
      })
      .catch((err) => console.error(err));
  }, [motcle]);

  return (
    <div className="container mt-4">
      <h2>Résultats pour : <strong>{motcle}</strong></h2>
      <div className="row">
        {artisans.map((a) => (
          <div className="col-md-4" key={a.id}>
            <div className="card mb-4 shadow">
              <img
                src={`/images/${a.image}`}
                className="card-img-top"
                alt={a.nom}
              />
              <div className="card-body">
                <h5 className="card-title">{a.nom}</h5>
                <p className="card-text">{a.specialite?.nom}</p>
                <p className="card-text"><small className="text-muted">{a.ville}</small></p>
              </div>
            </div>
          </div>
        ))}
        {artisans.length === 0 && (
          <p className="text-muted">Aucun artisan trouvé pour « {motcle} ».</p>
        )}
      </div>
    </div>
  );
}

export default RecherchePage;
