const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT, // ex: 'mysql'
  port: dbConfig.PORT,
  pool: dbConfig.pool,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import des modèles
db.Artisan = require("./artisan.model")(sequelize, DataTypes);
db.Specialite = require("./specialite.model")(sequelize, DataTypes);
db.Categorie = require("./categorie.model")(sequelize, DataTypes);

// Relations
db.Specialite.belongsTo(db.Categorie, { foreignKey: "categorie_id" });
db.Categorie.hasMany(db.Specialite, { foreignKey: "categorie_id" });

db.Artisan.belongsTo(db.Specialite, { foreignKey: "specialite_id" });
db.Specialite.hasMany(db.Artisan, { foreignKey: "specialite_id" });

module.exports = db;
