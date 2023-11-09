const express = require("express");
const {
  getOneUser,
  createUser,
  getAllFavoriteGamesForUser,
  deleteOneFavoriteGameForUser,
  getOneFavoriteGameForUser
} = require("../queries/users");

const users = express.Router();

users.get("/:userId/favorited_games", async (req, res) => {
  const { userId } = req.params;
  const userFavoritedGames = await getAllFavoriteGamesForUser(userId);
  res.json(userFavoritedGames);
});

users.get("/:userId/favorited_games/:favoritedGameId", async (req, res) => {
    try {
        const { userId, favoritedGameId } = req.params;
        const userFavoritedGame = await getOneFavoriteGameForUser(userId, favoritedGameId);
        if (userFavoritedGame) {
            res.json(userFavoritedGame);
        } else {
            res.status(404).send({ message: 'Favorited game not found.' }); 
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'An error occurred while retrieving the favorited game.' });
    }
});


users.delete("/:userId/favorited_games/:favorited_gameId", async (req, res) => {
  try {
    const { userId, favorited_gameId } = req.params;
    const deletedFavoritedGame = await deleteOneFavoriteGameForUser(
      userId,
      favorited_gameId
    );
    if (deletedFavoritedGame) {
      res.status(200).json({
        success: true,
        payload: {
          data: deletedFavoritedGame,
        },
      });
    } else {
      res.status(404).json("No Favorite Game Found");
    }
  } catch (error) {
    res.send(error);
  }
});

users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneUser = await getOneUser(id);
  if (oneUser) {
    res.json(oneUser);
  } else {
    res.status(404).json({ error: "User Not Found" });
  }
});

users.post("/", async (req, res) => {
  try {
    const createdUser = await createUser(req.body);
    res.json(createdUser);
  } catch (error) {
    res.status(404).json({ error: "Error Creating User" });
  }
});

module.exports = users;
