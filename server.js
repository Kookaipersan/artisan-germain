require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const db = require("./backend/models");

app.use(cors());
app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erreur serveur" });
});


// Serve static images
app.use("/images", express.static(path.join(__dirname, "assets/images")));

// Routes
app.use("/api/artisans", require("./backend/routes/artisan.routes"));
app.use("/api/categories", require("./backend/routes/categorie.routes"));
app.use("/api/specialites", require("./backend/routes/specialite.routes"));

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
  });
});
