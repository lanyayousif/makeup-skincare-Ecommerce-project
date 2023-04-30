import { configureStore } from "@reduxjs/toolkit";
import cartSlice  from "./reducer/cartSlice";
import productSlice from "./reducer/productSlice";
import { api } from "./api/api";
import userSlice from "./reducer/userSlice";

export default configureStore({
    reducer:{
        cart:cartSlice,
        product:productSlice,
        user:userSlice.reducer,
        [api.reducerPath]:api.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(api.middleware)
    
})


// setupListeners(store.dispatch)
// export default store

