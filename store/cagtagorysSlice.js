import { createSlice } from "@reduxjs/toolkit";

const categoriesSlide = createSlice({
    name:'catogory',
    initialState:[],
    reducers:{
        save(state , action){
            return  [...action.payload]
        }
    }
})

export const {save} = categoriesSlide.actions
export default categoriesSlide.reducer