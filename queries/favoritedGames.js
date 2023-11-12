const db = require("../db/dbConfig");

// const getAllFavoriteGames = async (user_id) => {
//   try {
//     const allFavoriteGames = await db.any(
//       "SELECT * FROM favorited_games WHERE user_id=$1",
//       user_id
//     );
//     return allFavoriteGames;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const createFavoriteGame = async (game_id, user_id) => {
//   try {
//     const favoritedGame = await db.one(
//       "INSERT INTO favorited_games (game_id, user_id) VALUES ($1, $2) RETURNING *",
//       [game_id, user_id]
//     );
//     return favoritedGame;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const deleteFavoritedGame = async (id) => {
//   try {
//     const deletedFavoritedGame = await db.one(
//       "DELETE FROM favorited_games WHERE id=$1 RETURING *",
//       id
//     );
//     return deletedFavoritedGame;
//   } catch (error) {
//     console.error(error);
//   }
// };


const getAllFavoritedGamesForUser = async (id) => {
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
  
 const createFavoritedGame = async (user_id, game_id) => {
  try {
    const createdFavoritedGame = await db.one("INSERT INTO favorited_games (game_id, user_id) VALUES ($1, $2) RETURNING *", [user_id, game_id])
    return createdFavoritedGame
  } catch (error) {
    console.error(error)
  }
 }
  
  
  const deleteOneFavoritedGameForUser = async (user_id, game_id) => {
    try {
      await db.none(
        'DELETE FROM favorited_games WHERE user_id = $1 AND game_id = $2',
        [user_id, game_id]
      );
      alert(`Game with ID ${game_id} deleted from favorites for user with ID ${user_id}`);
     
    } catch (error) {
      console.error(error);
    }
  };

module.exports = {
  getAllFavoritedGamesForUser,
  deleteOneFavoritedGameForUser,
  createFavoritedGame
};
