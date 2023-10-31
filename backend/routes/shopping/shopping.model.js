const { Schema, model } = require("mongoose");

const shoppingListSchema = Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  ingredients: [
    {
      ttl: {
        type: String,
        require: [true, "Set title of ingredient"],
        minlength: 3,
      },
      thb: {
        type: String,
        require: [true, "Set picture of ingredient"],
      },
      measure: {
        type: String,
        required: [true, "Set quantity of ingredient"],
      },
    },
  ],
});

const ShoppingList = model("shoppingList", shoppingListSchema);

module.exports = {
  ShoppingList,
};
