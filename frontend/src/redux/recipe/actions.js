import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  recipe: {
    _id: "640cd5ac2d9fecf12e889803",
    title: "Apple Frangipan Tart",
    description: "A delicious tart made with almond cream and fresh apples.",
    instructions:
      "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs.",
    thumb: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
    time: "50",
    ingredients: [
      {
        _id: "640c2dd963a319ea671e36c0",
        ttl: "chicken",
        measure: "1",
        thb: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365b.png",
      },
      {
        _id: "640c2dd963a319ea671e367e",
        ttl: "butter",
        measure: "175g",
        thb: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564674/ovea5weymaecrnbwxuq9.png",
      },
      {
        _id: "640c2dd963a319ea671e371f",
        ttl: "milk",
        measure: "2 tablespoons",
        thb: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/ly0kwisb5ripennlkqma.png",
      },
      {
        _id: "640c2dd963a319ea671e36d7",
        ttl: "flour",
        measure: "125g",
        thb: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564797/hwex2zzwxbv7a5gi9iuh.png",
      },
    ],
  },
  isLoading: false,
  error: null,
};

export const fetchRecipeById = createAsyncThunk(
  "recipe/fetchRecipeById",
  async (recipeId, thunkAPI) => {
    try {
      //const res = await axios.get(`/recipe/recipe/${recipeId}`);
      //return res.data;
      return initialState;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
