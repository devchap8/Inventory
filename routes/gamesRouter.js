const {Router} = require("express");
const gamesController = require("../controllers/gamesController");

const gamesRouter = Router();

gamesRouter.get("/", gamesController.gamesListGet);
gamesRouter.get("/genre/:genreName", gamesController.filteredGamesListGet);

gamesRouter.get("/delete/:gameId", gamesController.deleteGamesScreenGet);
gamesRouter.post("/delete/:gameId/delete", gamesController.deleteGamePost);

module.exports = gamesRouter;