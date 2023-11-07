const db = require("../db/dbConfig");

const getAllFavoriteGames = async (user_id) => {
  try {
    const allFavoriteGames = await db.any(
      "SELECT * FROM favorited_games WHERE user_id=$1",
      user_id
    );
    return allFavoriteGames;
  } catch (error) {
    console.error(error);
  }
};

const createFavoriteGame = async (game_id, user_id) => {
  try {
    const favoritedGame = await db.one(
      "INSERT INTO favorited_games (game_id, user_id) VALUES ($1, $2) RETURNING *",
      [game_id, user_id]
    );
    return favoritedGame;
  } catch (error) {
    console.error(error);
  }
};

const deleteFavoritedGame = async (id) => {
  try {
    const deletedFavoritedGame = await db.one(
      "DELETE FROM favorited_games WHERE id=$1 RETURING *",
      id
    );
    return deletedFavoritedGame;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllFavoriteGames,
  createFavoriteGame,
  deleteFavoritedGame,
};
