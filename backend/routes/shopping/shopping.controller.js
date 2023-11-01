const ShoppingList = require("./shopping.model");

const getShoppingList = async (req, res) => {
  try {
    const { _id: owner } = req.user;
    const result = await ShoppingList.find({ owner });

    if (result.length > 0) {
      res.json(result[0].ingredients);
    } else {
      res.status(404).json({ message: "Shopping list not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getShoppingList,
};
