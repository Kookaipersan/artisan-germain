const db = require("../models");
const Artisan = db.Artisan;
const Specialite = db.Specialite; 

// Get all artisans
exports.findAll = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: [{ model: Specialite, as: "specialite" }] 
    });
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get artisan by ID
exports.findOne = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: [{ model: Specialite, as: "specialite" }] 
    });
    if (!artisan) return res.status(404).json({ message: "Artisan non trouvé" });
    res.json(artisan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get top 3 artisans
exports.findTop = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true },
      limit: 3,
      include: [{ model: Specialite, as: "specialite" }] 
    });
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
