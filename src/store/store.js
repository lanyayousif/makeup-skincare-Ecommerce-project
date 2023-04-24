import { configureStore } from "@reduxjs/toolkit";
import cartSlice  from "./reducer/cartSlice";
import productSlice from "./reducer/productSlice";
import { productsApi } from "./services/services";

export default configureStore({
    reducer:{
        cart:cartSlice,
        product:productSlice,
        [productsApi.reducerPath]:productsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(productsApi.middleware)
    
})


// setupListeners(store.dispatch)
// export default store

