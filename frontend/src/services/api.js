// src/services/api.js

export const getArtisans = async () => {
 const response = await fetch("https://artisan-germain-backend.onrender.com/api/artisans");

  return await response.json();
};
