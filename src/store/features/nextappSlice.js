import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  favotiteData: [],
  allProducts: [],
  userInfo: null,
};

export const nextappSlice = createSlice({
  name: "nextApp",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (exProduct) {
        exProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    addTOFavorite: (state, action) => {
      const fav = state.favotiteData.find(
        (item) => item._id === action.payload._id
      );
      if (fav) {
        fav.quantity += action.payload.quantity;
      } else {
        state.favotiteData.push(action.payload);
      }
    },
    increasesQuantity: (state, action) => {
      const exProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      exProduct && exProduct.quantity++;
    },
    decreasesQuantity: (state, action) => {
      const exProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (exProduct?.quantity === 1) {
        exProduct.quantity = 1;
      } else {
        exProduct.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload._id
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const {
  addToCart,
  addTOFavorite,
  increasesQuantity,
  decreasesQuantity,
  deleteProduct,
  resetCart,
  addUser,
  removeUser,
  setAllProducts,
} = nextappSlice.actions;

export default nextappSlice.reducer;
