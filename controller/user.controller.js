const db = require("../db");
class UserController {
  async createUser(req, res) {
    const { shared, email } = req.body;
    const newPerson = await db.query(
      `INSERT INTO users (shared, email) values ($1, $2) RETURNING *`,
      [shared, email]
    );
    res.json(newPerson.rows[0]);
  }
  async getUsers(req, res) {}
  async getOneUser(req, res) {}
  async updateUser(req, res) {}
  async deleteUser(req, res) {}
}

module.exports = new UserController();
