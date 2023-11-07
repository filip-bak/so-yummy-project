const express = require("express");

const {
  getCategoryHandler,
  getCategoryPageHandler,
  getRecipeByIdHandler,
  getRecipesHandler,
  addRecipeHandler,
} = require("./recipes.controller");
const { asyncWrapper } = require("../../helpers/asyncWrapper");
const { getSearchRecipesHandler } = require("../search/search.controller");
const { authMiddleware } = require("../../modules/auth/auth.middleware");
const { upload } = require("../../modules/users/users.controller");
const { cloudinary } = require("../../modules/users/users.cloudinary");
const { Recipe } = require("./recipes.model");
const { getRecipes, getRecipe } = require("./recipes.service");

const router = express.Router();

router.get("/", asyncWrapper(getSearchRecipesHandler));
router.post("/", authMiddleware, asyncWrapper(addRecipeHandler));
router.get("/main-page", asyncWrapper(getRecipesHandler));
router.get("/category-list", asyncWrapper(getCategoryHandler));
router.get("/:category", asyncWrapper(getCategoryPageHandler));
router.get("/recipe/:id", asyncWrapper(getRecipeByIdHandler));

router.get("/my/own", authMiddleware, async (req, res) => {
  const { _id } = req.user;
  const recipes = await getRecipes({ owner: _id });

  if (!recipes) {
    return res.status(404).json({ message: "Recipes not found." });
  }
  return res.status(200).json({ recipes });
});

router.delete("/recipe/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndRemove(id).populate("owner", "_id");

    if (!recipe) {
      throw new Error("Recipe not found");
    }
    if (!recipe.owner || !req.user._id.equals(recipe.owner._id)) {
      return res.status(403).json({ message: "Unauthorized access." });
    }

    return res.status(200).json({ recipe });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post(
  "/upload",
  authMiddleware,
  upload.single("recipeImage"),
  async (req, res) => {
    try {
      const { _id } = req.user;
      const { width = 350, height = 350 } = req.body;

      const uploadOptions = {
        width,
        height,
        crop: "fill",
      };

      cloudinary.uploader.upload(
        req.file.path,
        uploadOptions,
        async (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              message: "Error",
            });
          }
          const imageUrl = result.secure_url;
          const recipe = await Recipe.findOneAndUpdate(
            {
              owner: _id,
            },
            {
              preview: imageUrl,
            }
          ).populate("owner", "_id");
          await res.status(200).json({
            message: "Uploaded",
            recipeImage: imageUrl,
          });
        }
      );
    } catch (error) {
      console.error(error);
      res.send({
        message: error.message,
      });
    }
  }
);

module.exports = {
  recipesRouter: router,
};
