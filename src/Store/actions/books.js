import { SET_BOOKS } from "./type.action";


export const setBooks= books=>({
    type:SET_BOOKS,
    payload:{
        books,
    }
})