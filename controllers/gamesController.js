const express = require("express");
const {
  getOneGame,
  getAllGames,
  createGame,
  updateGame,
  deleteGame,
} = require("../queries/games");

const games = express.Router();

games.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneGame = await getOneGame(id);
  if (oneGame) {
    res.json(oneGame);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

games.get("/", async (req, res) => {
  const allGames = await getAllGames();
  if (allGames[0]) {
    res.status(200).json({ succes: true, data: { payload: allGames } });
  } else {
    res.status(500).json({ success: false, data: { error: "Server Error!" } });
  }
});

games.post("/", async (req, res) => {
  try {
    const createdGame = await createGame(req.body);
    res.json(createdGame);
  } catch (error) {
    res.status(400).json({ error: "Request Not Found" });
  }
});

games.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGame = await deleteGame(id);
    if (deletedGame) {
      res.status(200).json({ success: true, payload: { data: deletedGame } });
    } else {
      res.status(404).json("Game Not Found");
    }
  } catch (error) {
    res.send(error);
  }
});

games.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedGame = await updateGame(id, req.body);
    if (updatedGame.id) {
        res.status(200).json(updatedGame)
    } else {
        res.status(404).json("No Game Found With That ID")
    }
})

module.exports = games;