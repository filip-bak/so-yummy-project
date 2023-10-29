const { model, Schema } = require("mongoose");

const ingredientSchema = Schema({
    ttl: {
        type: String,
        required: [true, "Set title of ingredient"],
        minlength:3,
    },
    desc: {
        type: String,
        required: [true, "Set description of ingredient"],
    },
    t: {
        type: String,
        default: "",
    },
    thb: {
        type: String,
        required: [true, "Set picture of ingredient"],
    },
},
    { versionKey: false, timestamps: true }
);

const Ingredient = model("Ingredient", ingredientSchema);

module.exports = {
  Ingredient,
};