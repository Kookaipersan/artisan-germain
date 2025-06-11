module.exports = (sequelize, DataTypes) => {
  const Artisan = sequelize.define(
    "artisan",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      note: {
        type: DataTypes.FLOAT,
        validate: {
          min: 0,
          max: 5,
        },
      },
      ville: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      a_propos: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      site: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      top: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: "artisan",
      timestamps: false,
    }
  );

  return Artisan;
};
