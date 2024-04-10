import { createSlice } from "@reduxjs/toolkit";
import { CartType } from "../../../typings";
import { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  cart: CartType[];
}

const initialState: InitialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartType>) {
      console.log("Working");
      const cartItemExist = state.cart.find((item) =>
        item.color === action.payload.color ? item : null
      );
      console.log("cartItemExits", cartItemExist);
      console.log("action payload", action.payload);
      if (cartItemExist) {
        const updatedCartItem = state.cart.map((item) =>
          item.color === cartItemExist.color
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
                total: item.total + action.payload.total,
              }
            : item
        );
        state.cart = updatedCartItem;
        console.log("Multiple", state.cart);
      } else {
        state.cart = [...state.cart, action.payload];
        console.log("Single", state.cart);
      }
      //   localStorage.setItem("cartLocal", JSON.stringify(state.cart));
    },
    getCartFromLocalStorage(state) {
      //   const cartLocal = localStorage.getItem("cartLocal");
      //   if (cartLocal !== null) {
      //     state.cart = JSON.parse(cartLocal);
      //   } else {
      //     state.cart = [];
      //   }
    },
  },
});

export const { addToCart, getCartFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;
