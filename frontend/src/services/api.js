// src/services/api.js

export const getArtisans = async () => {
  const response = await fetch("http://localhost:5000/api/artisans");
  return await response.json();
};
