const { Sequelize, Datatypes } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  port: dbConfig.PORT,
  pool: dbConfig.pool,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//import des modèles
db.Artisan = require("./artisan.model")(sequelize, Datatypes);
db.Specialite = require("./specialite.model")(sequelize, Datatypes);
db.Categorie = require("./categorie.model")(sequelize, Datatypes);

//relations
db.Specialiste.belongsTo(db.Categorie, { foreignKey: "categorie_id" });
db.Categorie.hasMany(db.Specialite, { foreignKey: "categorie_id" });

db.Artisan.belongsTo(db.Specialite, { foreignKey: "specialite_id" });
db.Specialite.hasmany(db.Artisan, { foreignKey: "specialite_id" });

module.exports = db;
