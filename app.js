const express = require("express");
const path = require("node:path");

const app = express();
const gamesRouter = require("./routes/gamesRouter");

app.locals.gamesController = require("./controllers/gamesController");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", gamesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app listening on port ${PORT}!`);
});