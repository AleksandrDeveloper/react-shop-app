import { SET_FILTER, SET_FILTER_SEARCH } from '../actions/type.action';


const initialState={
    searchQuiery:'',
    filterBy:'All'
}

export default function(state=initialState,action){
    const {type,payload} = action;

    switch (type) {
        case SET_FILTER:
            return{
                ...state,
                filterBy:payload.filter
            }
        case SET_FILTER_SEARCH:
            return{
                ...state,
                searchQuiery:payload.value
            }
        default:
            return {...state}
    }
} 