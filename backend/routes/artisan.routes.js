const express = require("express");
const router = express.Router();
const artisanController = require("../controllers/artisan.controller");

// Route pour les 3 artisans du mois
router.get("/top", artisanController.findTop);

// autres routes ici...
router.get("/", artisanController.findAll);
router.get("/:id", artisanController.findOne);

module.exports = router;
