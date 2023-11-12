const express = require("express");
const { getOneUserByEmail, createUser, getOneUser } = require("../queries/users");
const users = express.Router();
const favoritedGames = require("../controllers/favoritedGamesController");
const { validateRegisterInput }= require("../validation/usersValidation")

users.use("/:userId/favoritedGames", favoritedGames);

// users.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const oneUser = await getOneUser(id);
//   if (oneUser) {
//     res.json(oneUser);
//   } else {
//     res.status(404).json({ error: "User Not Found" });
//   }
// });

users.post("/register", validateRegisterInput, async (req, res,) => {
  try {
    // Make sure when making register form to include 
    // a field for passwordConfirmation in order for validator to work
    const createdUser = await createUser(req.body);
    res.json(createdUser);
  } catch (error) {
    res.status(404).json({ error: "Error Creating User" });
  }
});



module.exports = users;
