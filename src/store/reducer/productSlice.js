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
        page:1
    }
      
}


export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
      addSearchValue:(state,action)=>{
        state.products=action.payload
    },    
    }

})

export const {addSearchValue}=productSlice.actions
export default productSlice.reducer