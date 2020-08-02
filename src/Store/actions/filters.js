import { SET_FILTER } from "./type.action"

export const setFilter=(filter)=>{
    console.log(filter);
    return{
        type:SET_FILTER,
        payload:{
            filter
        }
    }
}