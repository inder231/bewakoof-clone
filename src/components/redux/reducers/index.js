import { combineReducers } from "redux";
import {
  authReducer,
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
  cartList: cartReducer,
  wishList: wishlistReducer,
  auth:authReducer,
});
