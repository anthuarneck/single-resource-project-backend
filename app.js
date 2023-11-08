const express = require("express");
const cors = require("cors");
const app = express();
const gamesController = require("./controllers/gamesController");

app.use(cors());
app.use(express.json());

app.use("/games", gamesController);

app.get("/", (req, res) => {
  res.send("Welcome to our Game Store");
});

app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "Page not found! " } });
});

module.exports = app;
