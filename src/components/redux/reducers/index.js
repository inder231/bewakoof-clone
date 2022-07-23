import { combineReducers } from "redux";
import {
  cartReducer,
  productReducer,
  searchedProductReducer,
  selectedProductReducer,
  wishlistReducer,
} from "./reducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  searchedProducts: searchedProductReducer,
  cartProducts: cartReducer,
  wishlist: wishlistReducer,
});
