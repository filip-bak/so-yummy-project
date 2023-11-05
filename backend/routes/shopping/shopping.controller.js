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

const addShoppingItem = async (req, res) => {
  // try {
  //   const owner = req.user._id;
  //   const isExisting = await ShoppingList.findOne({ owner });
  //   let newCollection;
  //   if (isExisting) {
  //     newCollection = await ShoppingList.findOneAndUpdate(
  //       { owner },
  //       { $push: { ingredients: req.body } },
  //       { returnDocument: "after" }
  //     );
  //   } else {
  //     newCollection = await ShoppingList.create({
  //       owner,
  //       ingredients: [req.body],
  //     });
  //   }

  //   res.status(201).json({ status: 201, data: newCollection });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Internal server error" });
  // }
  try {
    const owner = req.user._id;
    const { ttl, thb, measure } = req.body; // Dodane destrukturyzowanie, załóżmy, że te pola są przesyłane w req.body

    const isExisting = await ShoppingList.findOne({ owner });

    if (isExisting) {
      isExisting.ingredients.push({ ttl, thb, measure }); // Dodanie nowego składnika do listy
      await isExisting.save(); // Zapisanie zmian
      res.status(201).json({ status: 201, data: isExisting });
    } else {
      const newCollection = await ShoppingList.create({
        owner,
        ingredients: [{ ttl, thb, measure }], // Dodanie nowego składnika do nowej listy
      });
      res.status(201).json({ status: 201, data: newCollection });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getShoppingList,
  addShoppingItem,
};
