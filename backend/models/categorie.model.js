module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define("categorie", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'categorie',
    timestamps: false
  });

  return Categorie;
};
