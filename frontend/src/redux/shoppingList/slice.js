import { createSlice } from "@reduxjs/toolkit";

const testItems = [
  {
    itemId: "65435f71d53bea9772a22642",
    measure: "2 tablespoons",
    recipeId: "640cd5ac2d9fecf12e889807",
    ingredient: {
      id: "640c2dd963a319ea671e367e",
      name: "Butter",
      image:
        "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564674/ovea5weymaecrnbwxuq9.png",
    },
  },
  {
    itemId: "65435f77d53bea9772a22646",
    measure: "3 tablespoons",
    recipeId: "640cd5ac2d9fecf12e889807",
    ingredient: {
      id: "640c2dd963a319ea671e372c",
      name: "Olive Oil",
      image:
        "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/hzcfvlja7hmbp84z7f3q.png",
    },
  },
  {
    itemId: "65435f79d53bea9772a2264a",
    measure: "5 boneless",
    recipeId: "640cd5ac2d9fecf12e889807",
    ingredient: {
      id: "640c2dd963a319ea671e3675",
      name: "Bowtie Pasta",
      image:
        "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564217/sv5vhl5fpnitfl5kpgpj.png",
    },
  },
  {
    itemId: "65435fc3d53bea9772a2265c",
    measure: "175g",
    recipeId: "640cd5ac2d9fecf12e8897f4",
    ingredient: {
      id: "640c2dd963a319ea671e367e",
      name: "Butter",
      image:
        "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564674/ovea5weymaecrnbwxuq9.png",
    },
  },
  {
    itemId: "65435fc5d53bea9772a22660",
    measure: "2 tablespoons",
    recipeId: "640cd5ac2d9fecf12e8897f4",
    ingredient: {
      id: "640c2dd963a319ea671e371f",
      name: "Milk",
      image:
        "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/ly0kwisb5ripennlkqma.png",
    },
  },
  {
    itemId: "65435fc7d53bea9772a22664",
    measure: "125g",
    recipeId: "640cd5ac2d9fecf12e8897f4",
    ingredient: {
      id: "640c2dd963a319ea671e36d7",
      name: "Flour",
      image:
        "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564797/hwex2zzwxbv7a5gi9iuh.png",
    },
  },
];

const initialState = {
  items: testItems,
  isLoading: false,
  error: null,
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: initialState,
  reducers: {
    removeFromShoppingList: {
      reducer(state, action) {
        return {
          ...state,
          items: state.items.filter(item => item.itemId !== action.payload),
        };
      },
    },
  },
});

export const { removeFromShoppingList } = shoppingListSlice.actions;
export const shoppingListReducer = shoppingListSlice.reducer;
