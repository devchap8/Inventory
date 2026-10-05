const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

async function gamesListGet(req, res) {
    const games = await db.getAllGames();
    res.render("index",  {
        title: "Games Storage",
        games: games
    });
};


module.exports = {gamesListGet};