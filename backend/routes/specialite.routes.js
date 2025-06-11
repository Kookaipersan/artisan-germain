const express = require("express");
const router = express.Router();
const specialiteController = require("../controllers/specialite.controller");

// GET /api/specialites - toutes les spécialités
router.get("/", specialiteController.findAll);

// GET /api/specialites/:id - spécialité par ID
router.get("/:id", specialiteController.findOne);

module.exports = router;
