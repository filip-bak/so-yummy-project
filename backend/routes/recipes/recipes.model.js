const { model, Schema, default: mongoose } = require("mongoose");

const recipeSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Write title for your recepie"],
    },
    description: {
      type: String,
      required: [true, "Write description for your recepie"],
    },
    category: {
      type: String,
      required: [true, "Set category for your recepie"],
    },
    time: {
      type: Number,
      required: [true, "Set cooking time for your recepie"],
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
      required: [true, "Write your instructions"],
    },
    favorites: {
      type: Array,
      default: [],
    },
    popularity: {
      type: Number,
      default: 0,
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "users",
    },
  },
  { versionKey: false, timestamps: true }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = {
  Recipe,
};
