import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null
}

const userSlice=createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload
        },
        logoutt:(state,action)=>{
            localStorage.removeItem("access_token");
            state.user=null
        }
    }
})


export const {addUser,logoutt}=userSlice.actions
export default userSlice