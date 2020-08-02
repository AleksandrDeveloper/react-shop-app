import { ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART } from "../actions/type.action";

const initialState={
    cartArray:[] 
}
 

export default function(state=initialState,action){
    const {type,payload} = action;
    
    switch (type) {
        case ADD_BOOK_TO_CART:
            return{
                ...state,
                cartArray: [
                    ...state.cartArray,
                    ...payload.newBookToCart
                ]
            }
        case REMOVE_BOOK_FROM_CART:
            return{
                ...state,
                cartArray:state.cartArray.filter((item)=>item.id !==payload.bookId)
            }
        default:
            return {...state}
    }
} 