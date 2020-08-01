import {ADD_BOOK, SET_BOOKS} from '../actions/type.action';


const initialState={
    books:[]
}


export default function(state=initialState,action){
    const {type,payload} = action;

    switch (type) {
        case SET_BOOKS:
            return{
                ...state,
                books: payload.books
            }
        case ADD_BOOK:
            return{
                ...state,
                books:[
                    ...state.books,
                    payload.book
                ]
            }
        default:
            return {...state}
    }
}