require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./backend/models");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check pour Render
app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erreur serveur" });
});

// Servir les images statiques
app.use("/images", express.static(path.join(__dirname, "backend/assets/images")));

// Routes
app.use("/api/artisans", require("./backend/routes/artisan.routes"));
app.use("/api/categories", require("./backend/routes/categorie.routes"));
app.use("/api/specialites", require("./backend/routes/specialite.routes"));

// Démarrage du serveur
const PORT = process.env.PORT || 5000;

console.log("Tentative de connexion à la base de données...");

db.sequelize.sync()
  .then(() => {
    console.log("Connexion à la base de données réussie.");
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erreur de connexion à la base de données :", err);
    process.exit(1); // Arrêter le serveur si la connexion échoue
  });
