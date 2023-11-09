const db = require("../db/dbConfig");

const getOneUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
    return oneUser;
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (user) => {
  try {
    const createdUser = await db.one(
      "INSERT INTO users (first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING *",
      [user.first_name, user.last_name, user.email, user.password_hash]
    );
    return createdUser;
  } catch (error) {
    console.error(error);
  }
};

const getAllFavoriteGamesForUser = async (id) => {
  try {
    const favoriteGamesByUser = await db.any(
      `SELECT * FROM favorited_games JOIN users ON users.id = favorited_games.user_id JOIN games ON games.id = favorited_games.game_id WHERE favorited_games.user_id = $1;`,
      id
    );
    return favoriteGamesByUser;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getOneUser,
  createUser,
  getAllFavoriteGamesForUser
};
