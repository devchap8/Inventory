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

async function deleteGamesScreenGet(req, res) {
    const game = await db.getGameById(req.params.gameId);
    res.render("gameDelete", {
        game, 
        title: `Delete ${game.name}`,
        error: null,
    });
}

async function deleteGamePost(req, res) {
    const id = req.params.gameId;
    console.log(req.params);
    const { password } = req.body;

    if (password !== process.env.ADMIN_PASSWORD) {
        const game = await db.getGameById(id);
        return res.status(403).render("gameDelete", {
            title: "Delete game",
            game,
            error: "Wrong password",
        });
    }

    await db.deleteGame(id);
    res.redirect("/");    
}


module.exports = {gamesListGet, filteredGamesListGet, deleteGamesScreenGet, deleteGamePost};