const {Router} = require("express");
const gamesController = require("../controllers/gamesController");

const gamesRouter = Router();

gamesRouter.get("/", gamesController.gamesListGet);
gamesRouter.get("/genre/:genreName", gamesController.filteredGamesListGet);

gamesRouter.get("/add", gamesController.gamesAddGet);
gamesRouter.post("/add", gamesController.gamesAddPost);

gamesRouter.get("/delete/:gameId", gamesController.deleteGamesScreenGet);
gamesRouter.post("/delete/:gameId/delete", gamesController.deleteGamePost);

gamesRouter.get("/edit/:gameId", gamesController.gamesEditGet);
gamesRouter.post("/edit/:gameId", gamesController.gamesEditPost);

module.exports = gamesRouter;