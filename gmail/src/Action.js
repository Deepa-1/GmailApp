import { ADD_TO_STARRED} from "./ActionType";

export const addtodo=(content)=>{
    return{
    
        type:ADD_TODO,
        payload:{key:Date.now(),content}
    }

}
export const deltodo=(key)=>
{
    return{    
        type:DEL_TODO,
        payload:{key}                
    }
}
export const updatetodo=(key)=>
{
    return{
    
        type:UPDATE_TODO,
       payload:{key}       
    }
}





  