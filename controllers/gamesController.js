const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

async function gamesListGet(req, res) {
    const games = await db.getAllGames();
    const genres = await db.getAllGenres();
    res.render("index",  {
        title: "Games Storage",
        games: games,
        genres: genres,
        genreName: "All",
    });
};

async function filteredGamesListGet(req, res) {
    const genres = await db.getAllGenres();
    const genreName = req.params.genreName.charAt(0).toUpperCase() + req.params.genreName.slice(1);
    const filteredGamesList = await db.getGamesByGenre(genreName);
    res.render("index",  {
        title: `${genreName} Games`,
        games: filteredGamesList,
        genres: genres,
        genreName: genreName,
    });    
}


module.exports = {gamesListGet, filteredGamesListGet};