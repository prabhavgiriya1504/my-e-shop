import { updateCartItem } from "./Action";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESSS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

const initialState = {
  cart: null,
  loading: false,
  error: null,
  cartItems: [],
};
export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_ITEM_TO_CART_SUCCESSS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payLoad.cartItems],
        loading: false,
      };
    case ADD_ITEM_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payLoad,
      };
    case GET_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payLoad.cartItems,
        cart: action.payLoad,
        loading: false,
      };

    case GET_CART_FAILURE:
      return {
        ...state,
        error: action.payLoad,
        loading: false,
      };

    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        deleteCartItem: action.payLoad,
        loading: false,
      };

    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        updateCartItem: action.payLoad,
        
        loading: false,
      };

    case REMOVE_CART_ITEM_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
      return {
        ...state,
        error: action.payLoad,
        loading: false,
      };

    default:
      return state;
  }
};
