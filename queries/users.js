const db = require("../db/dbConfig");


const getOneUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
    return oneUser;
  } catch (error) {
    console.error(error);
  }
};

const getOneUserByEmail = async (email) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE email=$1", email);
    return oneUser;
  } catch (error) {
    console.error(error);
  }
}

const createUser = async (user) => {
  try {
    const createdUser = await db.one(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [user.firstName, user.lastName, user.email, user.password]
    );
    return createdUser;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getOneUser,
  createUser,
  getOneUserByEmail
 
};
