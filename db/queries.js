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

module.exports = {
    getAllGames,
    getAllGenres,
    getGamesByGenre
};