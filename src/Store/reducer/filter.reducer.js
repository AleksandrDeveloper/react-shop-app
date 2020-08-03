import { SET_FILTER } from '../actions/type.action';


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
        default:
            return {...state}
    }
}