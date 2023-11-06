const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");

const swaggerRouter = require("./modules/swagger/swagger.router");
const { usersRouter } = require("./modules/users/users.router");
const { recipesRouter } = require("./routes/recipes/recipes.router");
const { favoriteRouter } = require("./routes/favorite/favorite.router");
const { popularRecipesRouter } = require("./routes/popular/popular.router");
const {
  ingredientsRouter,
} = require("./routes/ingredients/ingredients.router");
const { shoppingRouter } = require("./routes/shopping/shopping.router");
const { corsOptions } = require("./config");
const { subscribeRouter } = require("./routes/subscribe/subscribe.router");
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));
app.use("/", express.static(path.join(__dirname, "public")));

app.use("/api/docs", swaggerRouter);
app.use("/api/users", usersRouter);

app.use("/api/recipes", recipesRouter);
app.use("/api/favorite", favoriteRouter);
app.use("/api/popular-recipes", popularRecipesRouter);
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/shopping-list", shoppingRouter);
app.use("/api/subscribe", subscribeRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
