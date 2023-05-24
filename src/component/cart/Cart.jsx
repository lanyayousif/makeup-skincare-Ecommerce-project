import React, { useEffect, useState } from "react";
import "./cart.css";
import cartImg from "../../assets/img/cartImgg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import Counter from "../counter/Counter";
import { NavLink } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, calculateTotals } from "../../store/reducer/cartSlice";
import {
  useGetCartProductQuery,
  useAddProductToCartMutation,
} from "../../store/api/cart.js";

function Cart() {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);

  useEffect(()=>{
    dispatch(calculateTotals())
  },[carts.cartItems])

  const newObj = {
    // cartItems: [{productId:carts.cartItems.map((c) => c.productId._id), quantity:carts.cartItems.quantity}]
    cartItems: carts.cartItems.map((c) => ( { productId: c.productId._id, quantity: c.quantity })),
    totalQuantity: carts.totalQuantity,
    totalPrice: carts.totalPrice,
    // userId:carts.userId
  }
 

  // get and post to database
  const [addProductCart, { isLoading, isError }] =useAddProductToCartMutation();

  const handleCheackout = () => {
    console.log(newObj)
    addProductCart(newObj);
  };
  const {
    data: getProductCart,
    issLoading,
    issError,
  } = useGetCartProductQuery();
  // console.log(getProductCart)

  return (
    // top-0 right-0 fixed bottom-0  h-[100vh] w-full max-w-[500px]
    <div className="cartPart   h-full w-full  bg-white relative z-[88] max-w-[500px] ">
      <div className="relative h-full">
        <h2 className="section_title py-10 ">my cart</h2>

        <div className="carts h-[70vh]  overflow-x-auto thin">
          {carts.cartItems.map((data) => {
            return <CartProduct {...data} key={data.productId._id} />;
          })}
        </div>

        <div className="buttonCart absolute bottom-30 left-0 right-0 px-4 bottom-0">
          <div className="totalPrice pb-4">
            <p className="subtotalCart inline-block float-left text-base font-semibold">
              Subtotal
            </p>
            <p className="subtotalPriceCart inline-block float-right text-base font-semibold">
              ${carts.totalPrice}
            </p>
          </div>
          {/* <NavLink to="/checkout" > */}
            <button onClick={handleCheackout} type="submit"  className="mainButton w-full mx-auto main-btn ">checkout</button>
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default Cart;

// function CartProduct({ price, name, img }) {
//   return (
//     <div className="cardtProduct w-[95%] mx-auto rounded bg-bg-bejiKal  mb-7">
//       <div className="flex  items-start w-full h-[120px]">
//         <div className="CartImg rounded-t rounded-b h-full w-3/12">
//           <img
//             src={cartImg}
//             alt="product image"
//             className="w-full h-full object-fill object-center rounded-t rounded-b"
//           />
//         </div>
//         <div className="cart_productname py-2 w-9/12 px-4">
//           <div className="flex items-center justify-between mb-4">
//             <p className="text-base">{name}</p>
//             <span className="trash">
//               <FontAwesomeIcon icon={faTrashCan} />
//             </span>
//           </div>

//           <div className="flex items-center justify-between py-2">
//             <Counter />
//             <p className="text-purple-text">{price}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const totalss = cartItemsInfor.cartItems.reduce((total, item) => {
//   return total + item.productId.ProductPrice * item.quantity;
// }, 0);
// console.log(cartItemsInfor)
// dispatch(addToCart(cartItemsInfor))

// const initialStatee = [
//   {
//       cartItems: [{id:1,age:2},{id:1,age:2}],
//       totalQuantity: 10,
//       totalPrice: 10,
//       userId: "64410d9cbec84f65377bca67",

//     }
// ];
// initialStatee.map((data) => {
//   // console.log(data.cartItems)
//   data.cartItems.map((data,index) => {
//     console.log(data.id) })

// })


// ..................
// const totals = carts.cartItems.reduce((total, item) => {
  //   return total + item.productId.ProductPrice * item.quantity;
  // }, 0);
  // console.log(carts)

  // const cartItemsInfor = { ...carts, totalPrice: totals };
  // console.log(cartItemsInfor);
