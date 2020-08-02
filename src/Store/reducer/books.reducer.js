import {ADD_BOOK, SET_BOOKS,SET_FILTER} from '../actions/type.action';


const initialState={
    isReady:false,
    booksArray:null,
    filterBy:'all'
}


export default function(state=initialState,action){
    const {type,payload} = action;

    switch (type) {
        case SET_BOOKS:
            return{
                ...state, 
                isReady:true,
                booksArray: payload.books
            }
        case ADD_BOOK:
            return{
                ...state,
                booksArray:[
                    ...state.booksArray,
                    payload.bookItem
                ]
            }
        case SET_FILTER:
            return{
                ...state,
                filterBy:payload.filter
            }
        default:
            return {...state}
    }
}