import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"

const initialState = {
    products:[],
    product:null,
    loading:false,
    error:null
}

export const CustomerProductReducer = (state = initialState , action) => {
    switch(action.type){
        case FIND_PRODUCTS_REQUEST :
            case FIND_PRODUCT_BY_ID_REQUEST :
                return{...state,loading:true,error:null};
        
        case FIND_PRODUCTS_SUCCESS:
            return{...state , loading:false , error:null , products:action.payLoad};
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return{...state , loading:false , error:null , product:action.payLoad};
         
        case FIND_PRODUCTS_FAILURE:
            case FIND_PRODUCT_BY_ID_FAILURE:
                return{...state , loading:false , error:action.payLoad};
                
        default:
            return state;        

    }
}