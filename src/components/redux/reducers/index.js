import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./reducer";

export const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
})