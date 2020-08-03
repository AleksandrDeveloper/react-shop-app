import {  ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART } from "./type.action";


export const addBook = book =>({
    type:ADD_BOOK_TO_CART,
    payload:{
        book
    }
})
export const removeBook = id =>({ 
    type:REMOVE_BOOK_FROM_CART,
    payload:{
        id
    }
})