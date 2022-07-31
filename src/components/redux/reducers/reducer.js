import { ActionTypes } from "../contents/actionTypes";
import { loadAuth, saveAuth } from "../../../utils/localStorage";
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
        products: [...state.products, payload],
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
        products: [...state.products, payload],
      };
    default:
      return state;
  }
};
const initAuth = {
  isAuth: false,
  token: "",
  isLoading: false,
};
export const authReducer = (state = initAuth, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.LOGIN_SUCCESS:
      let auth = { isAuth: true, token: payload.token };
      saveAuth("bewakoofAuth", auth);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
