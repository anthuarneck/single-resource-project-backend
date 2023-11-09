const express = require("express");
const {
  getOneUser,
  createUser,
  getAllFavoriteGamesForUser,
} = require("../queries/users");

const users = express.Router();

users.get("/:userId/favorited_games", async (req, res) => {
  const { userId } = req.params;
  const userFavoritedGames = await getAllFavoriteGamesForUser(userId);
  res.json(userFavoritedGames);
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
