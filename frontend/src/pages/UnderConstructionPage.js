import React from "react";
import "./UnderConstructionPage.scss";
import cone from "../assets/images/cone.png"; // placez l'icône ici

function UnderConstructionPage() {
  return (
    <div className="under-construction d-flex flex-column align-items-center justify-content-center">
      <img src={cone} alt="En construction" className="construction-icon mb-4" />
      <h2 className="text-primary">Page en construction</h2>
      <p>Cette page n'est pas encore disponible. Merci de revenir bientôt !</p>
    </div>
  );
}

export default UnderConstructionPage;

