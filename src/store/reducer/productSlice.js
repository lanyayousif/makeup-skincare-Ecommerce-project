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
    products:[
        {
          id: 1,
          productImg: product,
          productImgHover: product2,
          ratingNumber: 3.5,
          numberReviews: "278",
          productName: "KLAIRS 1",
          productType: "Freshly Juiced Vitamin C Drop 1",
          productPrice: 24,
          product_DiscountPrice: "",
          quantity:0,
          size: "4 Fl oz",
          imgsproduct: [product1, product22, product3, product4],
          imgfree: [imgproductFree, imgproductFree2, imgproductFree3],
        },
        {
          id: 2,
          productImg: product,
          productImgHover: product2,
          ratingNumber: 3.5,
          numberReviews: "278",
          productName: "KLAIRS 2",
          productType: "Freshly Juiced Vitamin C Drop 2",
          productPrice: 24,
          product_DiscountPrice: "$10",
          quantity:0
        },
        {
          id: 3,
          productImg: product,
          productImgHover: product2,
          ratingNumber: 3.5,
          numberReviews: "278",
          productName: "KLAIRS 3",
          productType: "Freshly Juiced Vitamin C Drop 3",
          productPrice: 24,
          product_DiscountPrice: "",
          quantity:0
        },
        {
          id: 4,
          productImg: product,
          productImgHover: product2,
          ratingNumber: 3.5,
          numberReviews: "278",
          productName: "KLAIRS 4",
          productType: "Freshly Juiced Vitamin C Drop 4",
          productPrice: 24,
          product_DiscountPrice: "$10",
          quantity:0
        },
        {
          id: 5,
          productImg: product,
          productImgHover: product2,
          ratingNumber: 3.5,
          numberReviews: "278",
          productName: "KLAIRS 5",
          productType: "Freshly Juiced Vitamin C Drop 5",
          productPrice: 24,
          product_DiscountPrice: "",
          quantity:0
        },
        {
          id: 6,
          productImg: product,
          productImgHover: product2,
          ratingNumber: 3.5,
          numberReviews: "278",
          productName: "KLAIRS 6",
          productType: "Freshly Juiced Vitamin C Drop 6",
          productPrice: 24,
          product_DiscountPrice: "$10",
          quantity:0
        },
        {
          id: 7,
          productImg: product,
          productImgHover: product2,
          ratingNumber: 3.5,
          numberReviews: "278",
          productName: "KLAIRS 7",
          productType: "Freshly Juiced Vitamin C Drop 7",
          productPrice: 24,
          product_DiscountPrice: "",
          quantity:0
        },
        {
          id: 8,
          productImg: product,
          productImgHover: product2,
          ratingNumber: 3.5,
          numberReviews: "278",
          productName: "KLAIRS 8",
          productType: "Freshly Juiced Vitamin C Drop 8",
          productPrice: 24,
          product_DiscountPrice: "$10",
          quantity:0
        },
        {
          id: 9,
          productImg: product,
          productImgHover: product2,
          ratingNumber: 3.5,
          numberReviews: "278",
          productName: "KLAIRS 9",
          productType: "Freshly Juiced Vitamin C Drop 9",
          productPrice: 22,
          product_DiscountPrice: "",
          quantity:0
        },
        {
          id: 10,
          productImg: product,
          productImgHover: product2,
          ratingNumber: 3.5,
          numberReviews: "278",
          productName: "KLAIRS 10",
          productType: "Freshly Juiced Vitamin C Drop",
          productPrice: 23,
          product_DiscountPrice: "$10",
          quantity:0
        },
      ]
}


export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
            
    }

})
export default productSlice.reducer