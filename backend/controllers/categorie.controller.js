const db = require('../models');
const Categorie = db.Categorie;

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    res.json(categories);
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories:', error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
