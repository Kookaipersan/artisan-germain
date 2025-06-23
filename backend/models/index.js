const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

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
