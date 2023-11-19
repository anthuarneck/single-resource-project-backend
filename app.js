const express = require("express");
const cors = require("cors");
const app = express();
const gamesController = require("./controllers/gamesController");
const userController = require("./controllers/usersController")
const favoritedGamesController = require("./controllers/favoritedGamesController")

app.use(cors());
app.use(express.json());

app.use("/games", gamesController)
app.use("/users", userController);
app.use("/favoritedGames", favoritedGamesController)

app.get("/", (req, res) => {
  res.send("Welcome to our Game Store");
});

// app.get("*", (req, res) => {
//   res.status(404).json({ success: false, data: { error: "Page not found! " } });
// });

module.exports = app;
