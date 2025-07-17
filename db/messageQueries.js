const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE Id = $1", [id]);
  return rows;
}

async function insertMessage(message) {
  await pool.query("INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)", [message.user, message.text, message.added]);
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessageById
};
