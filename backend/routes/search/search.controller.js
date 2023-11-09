const { searchRecipes } = require("./search.service");
const Joi = require("joi");

const getSearchRecipesHandler = async (req, res) => {
  const { _id } = req.user;
  const validationResult = validateQueryParams(req);
  if (validationResult.error) {
    return res.status(400).json(validationResult.error.details[0].message);
  }

  const queryParams = getQueryFilter(req);

  try {
    const [recipes, totalCount] = await searchRecipes(
      queryParams,
      req.query.page,
      req.query.resultsPerPage,
      _id
    );
    return res.json({ recipes, totalCount });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const validateQueryParams = req => {
  const schema = Joi.object({
    title: Joi.string().min(3),
    ingredient: Joi.string().min(3),
    page: Joi.number().greater(0).required(),
    resultsPerPage: Joi.number().valid(6, 12).required(),
  }).or("title", "ingredient");

  return schema.validate(req.query);
};

const getQueryFilter = req => {
  if (isValidValueForFilter(req.query.title)) {
    return { title: req.query.title };
  } else if (isValidValueForFilter(req.query.ingredient)) {
    return { ingredient: req.query.ingredient };
  }
};

const isValidValueForFilter = value => {
  return typeof value === "string" && value.trim().length > 0;
};

module.exports = {
  getSearchRecipesHandler,
};
