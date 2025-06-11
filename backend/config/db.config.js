module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "", // ← Remplace par ton vrai mot de passe
  DB: "trouve_ton_artisan", // ← ou le nom exact de ta base de données
  DIALECT: "mysql",
  PORT: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
