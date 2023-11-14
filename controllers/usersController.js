const express = require("express");
const {
  getOneUserByEmail,
  createUser,
  getOneUser,
} = require("../queries/users");
const users = express.Router();
const favoritedGames = require("../controllers/favoritedGamesController");
const { validateRegisterInput } = require("../validation/usersValidation");
var bcrypt = require("bcryptjs");

users.use("/:userId/favoritedGames", favoritedGames);

users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneUser = await getOneUser(id);
  if (oneUser) {
    res.json(oneUser);
  } else {
    res.status(404).json({ error: "User Not Found" });
  }
});

users.post("/register", validateRegisterInput, async (req, res) => {
  try {
    const { password, ...userData } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const createdUser = await createUser({
      ...userData,
      password: hashedPassword,
    });
    res.json(createdUser);
  } catch (error) {
    res.status(500).json({ error: "Error Creating User" });
  }
});

users.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getOneUserByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.json({ message: "Login successful", user });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

module.exports = users;
