import { SET_FILTER,SET_FILTER_SEARCH } from "./type.action"

export const setFilter=(filter)=>{
    return{
        type:SET_FILTER,
        payload:{
            filter
        }
    }
}

export const setSearch=(value)=>{
    return{
        type:SET_FILTER_SEARCH,
        payload:{
            value
        }
    }
}