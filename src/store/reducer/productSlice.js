import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import product from "../../assets/img/product.jpg";
import product2 from "../../assets/img/product2.jpg";

import product1 from "../../assets/img/pro_page.jpg";
import product22 from "../../assets/img/pro_page (2).jpg";
import product3 from "../../assets/img/pro_page (3).jpg";
import product4 from "../../assets/img/pro_page (4).jpg";
import imgproductFree from "../../assets/img/gluten-free.png";
import imgproductFree2 from "../../assets/img/cruelty-free.png";
import imgproductFree3 from "../../assets/img/vegan.png";

const initialState={
    products:{
        search:"",
        page:1,
        sort:"alphaAZ"
        // all:true
    }
      
}


export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
      addSearchValue:(state,action)=>{
        const payloadKeys = Object.keys(action.payload);
        // state.products=action.payload
        for (let i = 0; i < Object.keys(action.payload).length; i++) {
            const payloadKey = payloadKeys[i];
           for (let j = 0; j < Object.keys(state.products).length; j++) {
               const productKey = Object.keys(state.products)[j];
            if(productKey === payloadKey){
                      state.products[productKey] = action.payload[payloadKey];
                    //  console.log(action.payload[payloadKey])
            }
           }  
        }
    },    
    }

})

export const {addSearchValue}=productSlice.actions
export default productSlice.reducer