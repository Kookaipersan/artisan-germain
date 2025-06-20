import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Header.scss";


function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/recherche/${search.toLowerCase()}`);
      setSearch("");
    }
  };

  return (
  <nav className="navbar navbar-expand-lg custom-navbar py-3">
  <div className="container d-flex justify-content-between align-items-center">

    {/* Logo */}
    <Link className="navbar-brand me-3" to="/">
      <img src={logo} alt="Logo" height="60" />
    </Link>

    {/* Search bar */}
    <form className="d-flex align-items-center search-bar" onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control me-2"
        placeholder="Recherche un artisan"
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-outline-light" type="submit">🔍</button>
    </form>

    {/* Burger menu toggle */}
    <button
      className="navbar-toggler ms-3"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon" />
    </button>

    {/* Menu links */}
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav text-center text-lg-end">
        <li className="nav-item"><Link className="nav-link" to="/">Accueil</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/categorie/batiment">Bâtiment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/categorie/services">Services</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/categorie/fabrication">Fabrication</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/categorie/alimentation">Alimentation</Link></li>
      </ul>
    </div>
  </div>
</nav>
  
  );
}

export default Header;
