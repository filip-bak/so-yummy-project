const express = require('express');
const {
    getFavoritesHandler,
    addFavoriteHandler,
    deleteFavoriteHandler,
    getFavoritePaginationHandler
} = require('./favorite.controller');

const { asyncWrapper } = require('../../helpers/asyncWrapper');

const router = express.Router();

router.get("/", asyncWrapper(getFavoritesHandler));
router.get("/paginate", asyncWrapper(getFavoritePaginationHandler));
router.post("/:id", asyncWrapper(addFavoriteHandler));
router.delete("/:id", asyncWrapper(deleteFavoriteHandler));

module.exports = {
    favoriteRouter:router,
}