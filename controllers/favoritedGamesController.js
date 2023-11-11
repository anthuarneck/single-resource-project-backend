const express = require("express");
const {
  getAllFavoritedGamesForUser,
  deleteOneFavoritedGameForUser,
  createFavoritedGame,
} = require("../queries/favoritedGames");

const favoritedGames = express.Router({ mergeParams: true });

favoritedGames.get("/", async (req, res) => {
  const { userId } = req.params;
  const userFavoritedGames = await getAllFavoritedGamesForUser(userId);
  res.json(userFavoritedGames);
});

favoritedGames.post("/:gameId", async (req, res) => {
  try {
    const { userId, gameId } = req.params;
    const createdFavoritedGame = await createFavoritedGame(userId, gameId);
    if (createdFavoritedGame) {
      res
        .status(200)
        .json({ success: true, payload: { data: createdFavoritedGame } });
    }
  } catch (error) {
    res.send(error);
  }
});

favoritedGames.delete("/:favoritedGameId", async (req, res) => {
  try {
    const { userId, favoritedGameId } = req.params;
    const deletedFavoritedGame = await deleteOneFavoritedGameForUser(
      userId,
      favoritedGameId
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

module.exports = favoritedGames;
