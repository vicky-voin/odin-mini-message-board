const {Client} = require("pg");

require("dotenv").config();

const SQL = `CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  text TEXT,
  added TIMESTAMP
);

INSERT INTO
  messages (username, text, added)
VALUES 
  ('Amando', 'Hi there!', now()),
  ('Charles', 'Helo world!', now());`


async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PW}@centerbeam.proxy.rlwy.net:24788/railway`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
