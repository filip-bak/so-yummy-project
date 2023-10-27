const { model, Schema, default: mongoose } = require("mongoose");
const Joi = require("joi");

const recipeSchema = Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
    },
    title: {
      type: String,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    time: {
      type: Number,
      required: [true, "time is required"],
    },
    ingredients: {
      type: Array,
      default: [],
    },
    thumb: {
      type: String,
      required: [true, "thumb is required"],
    },
    preview: {
      type: String,
      required: [true, "preview is required"],
    },
    instructions: {
      type: String,
      required: [true, "instruction is required"],
    },
    favorites: {
      type: Array,
      default: [],
    },
    popularity: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Array,
      default: [],
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const addSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required().messages({
    "string.empty": 'Recipe description cannot be empty',
    "any.required": 'Recipe description is required',
  }),

  thumb: Joi.string().messages({
    "string.empty": 'Recipe image cannot be empty',
    "any.required": 'Recipe image is required',
  }),
  preview: Joi.string().messages({
    "string.empty": 'Recipe image cannot be empty',
    "any.required": 'Recipe image is required',
  }),
  category: Joi.string().required().messages({
    "string.empty": 'Recipe category cannot be empty',
    "any.required": 'Recipe category is required',
  }),
  time: Joi.string().required().messages({
    "string.empty": 'Recipe time cannot be empty',
    "any.required": 'Recipe time is required',
  }),
  ingredients: Joi.string().required().messages({
    "string.empty": 'Recipe ingradients cannot be empty',
    "any.required": 'Recipe ingradients is required',
  }),
  instructions: Joi.string().required().messages({
    "string.empty": 'Recipe preparation cannot be empty',
    "any.required": 'Recipe preparation is required',
  }),
});


const Recipe = model("Recipe", recipeSchema);
const PopularRecipe = model("popularRecipes", recipeSchema, "popularRecipe");

module.exports = {
  Recipe,
  PopularRecipe,
  addSchema
};