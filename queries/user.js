const db = require("../db/dbConfig");

const getOneUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM user WHERE id=$1", id);
    return oneUser;
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (user) => {
  try {
    const createdUser = await db.one(
      "INSERT INTO user (first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING *",
      [user.first_name, user.last_name, user.email, user.password_hash]
    );
    return createdUser;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getOneUser,
  createUser,
};
