module.exports = (sequelize, DataTypes) => {
  const Specialite = sequelize.define("specialite", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    categorie_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'specialite',
    timestamps: false
  });

  return Specialite;
};
