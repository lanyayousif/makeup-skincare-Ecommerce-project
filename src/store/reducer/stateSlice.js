import { createSlice } from "@reduxjs/toolkit";

const initialState={
    searchBtnState:false
}

const stateSlice=createSlice({
    name:"stateSlice",
    initialState,
    reducers:{
        addsearchState(state,action){
            state.searchBtnState=action.payload.searchBtnState
            console.log(action.payload.searchBtnState)
        }
    }

})

export const {addsearchState}=stateSlice.actions
export default stateSlice.reducer

