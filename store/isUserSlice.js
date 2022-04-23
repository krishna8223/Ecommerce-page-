import { createSlice } from "@reduxjs/toolkit";
import cookies from 'js-cookie'


const userSlice = createSlice({
    name:'user',
    initialState:{
        active:false,
        name:''
    },
    reducers:{
        autoSet(state,action){
            // const check = cookies.getItem('user')
            // console.log('check');
            // if(check){
            //     console.log('true');
                // return {active}
            // }
        },
        update(state,action){
            return {active:action.payload.active,name:action.payload.name}
        }
    }
})

export const  {autoSet,update} = userSlice.actions
export default userSlice.reducer
