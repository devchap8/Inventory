const {Client} = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    name VARCHAR (255),
    genres TEXT[],
    release_year INTEGER,
    developers TEXT[],
    description TEXT
);

INSERT INTO games (name, genres, release_year, developers, description)
VALUES (
    'Rocket League',
    '{"sports", "action", "competitive"}',
    2015,
    '{"Psyonix", "Epic Games"}',
    'Physics-based competitive soccer game with rocket-powered flying cars'
);

INSERT INTO games (name, genres, release_year, developers, description)
VALUES (
    'Minecraft',
    '{"sandbox", "adventure", "survival"}',
    2011,
    '{"Mojang", "Microsoft"}',
    'Open-world sandbox survival game where players can build almost anything'
);
`

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();