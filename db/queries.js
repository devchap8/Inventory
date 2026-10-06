const pool = require("./pool");

async function getAllGames() {
    const {rows} = await pool.query("SELECT * FROM games");
    return rows;
} 

async function getAllGenres() {
    const genreLists = await pool.query("SELECT genres FROM games");
    const genreSet = new Set(genreLists.rows.flatMap(g => g.genres));
    return Array.from(genreSet);
}

async function getGamesByGenre(genre) {
    const filteredGames = await pool.query(`
        SELECT * FROM games 
        WHERE genres @> ARRAY['${genre.toLowerCase()}'] 
    `);
    return filteredGames.rows;
}

async function getGameById(gameId) {
    const game = await pool.query(`
        SELECT * FROM games
        WHERE id = ${gameId};
    `);
    return game.rows[0];
}

async function deleteGame(gameId) {
    await pool.query(`
        DELETE FROM games
        WHERE id = ${gameId};
    `);
}

function splitAndTrim(str) {
  return str.split(",")
  .map(item => item.trim())
  .filter(item => item !== "");
}

async function addGame(data) {
    const genreList = splitAndTrim(data.genres);
    const devList = splitAndTrim(data.developers);
    await pool.query(
        `INSERT INTO games (name, genres, release_year, developers, description)
        VALUES ($1, $2, $3, $4, $5);`,
        [data.name, genreList, data.year, devList, data.description]
    );
}

async function editGame(data, id) {
    const genreList = splitAndTrim(data.genres);
    const devList = splitAndTrim(data.developers);
    await pool.query(
    `UPDATE games
    SET name = $1,
        genres = $2,
        release_year = $3,
        developers = $4,
        description = $5
    WHERE id = $6`,
    [data.name, genreList, data.year, devList, data.description, id]
    );
}

module.exports = {
    getAllGames,
    getAllGenres,
    getGamesByGenre,
    getGameById,
    deleteGame,
    addGame,
    editGame,
};