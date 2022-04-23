import { clearAllListeners, createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter((e)=> e.id !== action.payload)
        },
        clearAll(state,action){
         return  action.payload
            
        }
    }
})

export const  {add , remove , clearAll} = cartSlice.actions 
export default cartSlice.reducer