import { ActionTypes } from "../contents/actionTypes";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export const setSearchedProduct = (products) => {
  return {
    type: ActionTypes.SET_SEARCHED_PRODUCTS,
    payload: products,
  };
};
export const removeSearchedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SEARCHED_PRODUCTS,
  };
};
export const addtocart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const addtowishlist = (product) => {
  return {
    type: ActionTypes.ADD_TO_WISHLIST,
    payload: product,
  };
};
export const loginRequest = () => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload: payload,
  };
};
export const loginFailure = () => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
  };
};
