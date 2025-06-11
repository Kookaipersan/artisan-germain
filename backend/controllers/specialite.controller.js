const db = require("../models");
const Specialite = db.Specialite;

// Récupérer toutes les spécialités
exports.findAll = async (req, res) => {
  try {
    const specialites = await Specialite.findAll({
      include: db.Categorie // inclure la catégorie associée
    });
    res.status(200).json(specialites);
  } catch (error) {
    console.error("Erreur lors de la récupération des spécialités :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Récupérer une spécialité par ID
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const specialite = await Specialite.findByPk(id, {
      include: db.Categorie
    });
    if (!specialite) {
      return res.status(404).json({ message: "Spécialité non trouvée" });
    }
    res.status(200).json(specialite);
  } catch (error) {
    console.error("Erreur lors de la récupération de la spécialité :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};