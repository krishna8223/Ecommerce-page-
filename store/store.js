import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { HYDRATE,createWrapper } from "next-redux-wrapper";
import cagtagorysSlice from "./cagtagorysSlice";
import cartSlice from "./cartSlice";
import userSlice from "./isUserSlice";


const combinedReducers = combineReducers({
    cart:cartSlice,
    catogery:cagtagorysSlice,
    user:userSlice
}) 



const masterReducer = (state, action) => {
    
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            user:action.payload.user,
            
        }
        return nextState;
    } else {
    return combinedReducers(state, action)
  }
}


const  makeStore = () => configureStore({
    reducer:masterReducer,
})


export const wrapper = createWrapper(makeStore)