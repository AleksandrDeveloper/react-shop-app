import { ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART } from "../actions/type.action";

const initialState={
    cartArray:[
        {
            id: 0,
            title: "Происхождение",
            author: "Дэн Браун",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 710,
            rating: 3
        },
        {
            id: 0,
            title: "Происхождение",
            author: "Дэн Браун",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 710,
            rating: 3
        },
    ] 
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