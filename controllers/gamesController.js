const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

async function gamesListGet(req, res) {
    const games = await db.getAllGames();
    const genres = await db.getAllGenres();
    res.render("index",  {
        title: "Games Storage",
        games: games,
        genres: genres,
    });
};


module.exports = {gamesListGet};