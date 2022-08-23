import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { categoryReducer } from "./categories/categories.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoryReducer,
  cart: cartReducer,
});
