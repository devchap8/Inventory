const {Client} = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    name VARCHAR (255),
    genre TEXT[],
    release_year INTEGER,
    developer TEXT[],
    prequel TEXT[],
    sequel TEXT[]
);

INSERT INTO games (name, genre, release_year, developer, prequel, sequel)
VALUES (
    'Rocket League',
    '{"sports", "action", "competitive"}',
    2015,
    '{"Psyonix", "Epic Games"}',
    '{"Supersonic Acrobatic Rocket-Powered Battle Cars"}',
    NULL
);

INSERT INTO games (name, genre, release_year, developer, prequel, sequel)
VALUES (
    'Minecraft',
    '{"sandbox", "adventure", "survival"}',
    2011,
    '{"Mojang", "Microsoft"}',
    NULL,
    NULL
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