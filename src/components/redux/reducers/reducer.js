import { ActionTypes } from "../contents/actionTypes";

const initState = {
  products: [],
};
export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};
export const searchedProductReducer = (
  state = { searchedProducts: [] },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_SEARCHED_PRODUCTS:
      return {
        ...state,
        searchedProducts: payload,
      };
    case ActionTypes.REMOVE_SEARCHED_PRODUCTS:
      return { ...state, searchedProducts: [] };
    default:
      return state;
  }
};
export const selectedProductReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        products:[...state.products,payload]
      };
    default:
      return state;
  }
};
export const wishlistReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        products: [...state.products,payload],
      };
    default:
      return state;
  }
};
