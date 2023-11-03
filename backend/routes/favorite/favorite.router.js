const express = require("express");
const {
  getFavoritesHandler,
  addFavoriteHandler,
  deleteFavoriteHandler,
  getFavoritePaginationHandler,
} = require("./favorite.controller");

const { asyncWrapper } = require("../../helpers/asyncWrapper");
const { authMiddleware } = require("../../modules/auth/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, asyncWrapper(getFavoritesHandler));
router.get(
  "/paginate",
  authMiddleware,
  asyncWrapper(getFavoritePaginationHandler)
);
router.post("/:id", authMiddleware, asyncWrapper(addFavoriteHandler));
router.delete("/:id", authMiddleware, asyncWrapper(deleteFavoriteHandler));

module.exports = {
  favoriteRouter: router,
};
