const db = require("../db/dbConfig.js");

const getAllGames = async () => {
  // console.log(id)
  try {
    const allGames = await db.any("SELECT * FROM games");
    console.log(allGames)
    return allGames;
  } catch (error) {
    console.error(error);
  }
};

const getOneGame = async (id) => {
  try {
    const oneGame = await db.one("SELECT * FROM games WHERE id=$1", id);
    return oneGame;
  } catch (error) {
    console.error(error);
  }
};

const createGame = async (game) => {
  try {
    const createdGame = await db.one(
      "INSERT INTO games (title, price, esrb_rating, release_year, available, genre, score) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        game.title,
        game.price,
        game.esrb_rating,
        game.release_year,
        game.available,
        game.genre,
        game.score,
      ]
    );
    return createdGame;
  } catch (error) {
    console.error(error);
  }
};

const updateGame = async (id, game) => {
  try {
    const { title, price, esrb_rating, release_year, available, genre, score } =
      game;
    const updatedGame = await db.one(
      "UPDATE games SET title=$1, price=$2, esrb_rating=$3, release_year=$4, available=$5, genre=$6, score=$7 WHERE id=$8 RETURNING *",
      [title, price, esrb_rating, release_year, available, genre, score, id]
    );
    return updatedGame;
  } catch (error) {
    console.error(error);
  }
};

const deleteGame = async (id) => {
  try {
    const deletedGame = await db.one(
      "DELETE FROM games WHERE id=$1 RETURNING *",
      id
    );
    return deletedGame;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllGames,
  getOneGame,
  createGame,
  updateGame,
  deleteGame,
};
