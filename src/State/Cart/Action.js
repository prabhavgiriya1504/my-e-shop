import { api } from "../../config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESSS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST } from "./ActionType"

export const getCart =  () => async (dispatch) => {
    dispatch({type:GET_CART_REQUEST})

    try{
        const {data} = await api.get("/api/cart/");
        dispatch({type:GET_CART_SUCCESS , payLoad:data});
        console.log("cart is : ",data);
    }
    catch(error){
        dispatch({type:GET_CART_FAILURE , payLoad:error.message})
    }
}

export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({type:ADD_ITEM_TO_CART_REQUEST})

    try{console.log("reqdata is : ",reqData);
        const {data} = await api.put("api/cart/add" , reqData)
        
        console.log("adding item to cart : ",data)
        dispatch({type:ADD_ITEM_TO_CART_SUCCESSS , payLoad:data})
    }
    catch(error){
        dispatch({type:ADD_ITEM_TO_CART_FAILURE , payLoad:error.message})
    }
}

export const removeCartItem = (cartItemId) => async (dispatch) => {
    dispatch({type:REMOVE_CART_ITEM_REQUEST})

    try{
        const {data} = await api.delete(`api/cart_items/${cartItemId}`)
        dispatch({type:REMOVE_CART_ITEM_SUCCESS , payLoad:cartItemId})
    }
    catch(error){
        dispatch({type:REMOVE_CART_ITEM_FAILURE , payLoad:error.message})
    }
}


export const updateCartItem = (reqData) => async (dispatch) => {
    dispatch({type:UPDATE_CART_ITEM_REQUEST})

    try{ 
        const {data} = await api.put(`api/cart_items/${reqData.cartItemId}` , reqData.data)
        dispatch({type:REMOVE_CART_ITEM_SUCCESS , payLoad:data})
    }
    catch(error){
        dispatch({type:UPDATE_CART_ITEM_FAILURE , payLoad:error.message})
    }
}