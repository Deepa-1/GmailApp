
import { ADD_TODO, DEL_TODO} from "./actiontype";

const initialState = {

    items:[],
    currentItem:{
      key : '',
      content:''
      
    }
};
const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        
        case ADD_TODO:
            {
           
              const {key,content}=action.payload
                state.currentItem={key,content}
                
                let newItem = state.currentItem;
                //console.log(key);
                //console.log(content);
              //  console.log(newItem);
               // console.log(state);
              
                if(newItem.content!==""){
                  console.info("came to loop");
                  let items = [...state.items, newItem];//work,sleep now add eat
                 // console.log(items);
                  items=items;
                //initialState.currentItem='';
                console.log(key+"hii");   
                         return {items,content:'',key};
                }  
                break;
            }
          case DEL_TODO:
            {
              const {key}=action.payload
              let items = state.items;

              const filteredItems= items.filter(item =>
                item.key!==key);
             
              state.items=filteredItems;
              items=state.items;
              console.log(items);
              return {items,content:'',key};

              break;             
            }          
            default :return state;        
    }
}





  export default reducer