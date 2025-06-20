import React from "react";
import logo from "../assets/images/logo.png";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer text-white py-4">
      <div className="container">
        <div className="row align-items-start">
          {/* Colonne gauche : Logo + copyright */}
          <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
            <img
              src={logo}
              alt="Logo Région AURA"
              className="footer-logo mb-2"
            />
            <p className="mb-0 small">
              © 2025 Région Auvergne‑Rhône‑Alpes
              <br />
              Tous droits réservés
            </p>
          </div>

          {/* Colonne centre : pages Légales */}
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <h5 className="fw-bold">Pages Légales</h5>
            <span className="red-line"></span>
            <ul className="footer-links">
              <li>
                <Link to="/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <Link to="/donnees-personnelles">Données personnelles</Link>
              </li>
              <li>
                <Link to="/accessibilite">Accessibilité</Link>
              </li>
              <li>
                <Link to="/cookies">Cookies</Link>
              </li>
            </ul>
          </div>

          {/* Colonne droite : adresse */}
          <div className="col-12 col-md-4 text-center">
            <h5 className="fw-bold">Adresse</h5>
            <span className="red-line"></span>
            <address className="mb-0 small">
              101 cours Charlemagne
              <br />
              CS 20033 – 69269 LYON CEDEX 02
              <br />
              France
              <br />
              <a href="tel:+33426734000" className="footer-link">
                +33 (0)4 26 73 40 00
              </a>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
