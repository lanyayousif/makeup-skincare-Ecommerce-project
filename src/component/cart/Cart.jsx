import React, { useState } from "react";
import "./cart.css";
import cartImg from "../../assets/img/cartImgg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import Counter from "../counter/Counter";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import CartProduct from "./CartProduct";

function Cart() {
  const cartProductData = [
    {
      id: 1,
      name: "Lorem Ipsum, giving information ",
      img: cartImg,
      price: "$144",
    },
    {
      id: 2,
      name: " giving information Lorem Ipsum,",
      img: cartImg,
      price: "$44",
    },
    {
      id: 3,
      name: " giving information Lorem Ipsum,",
      img: cartImg,
      price: "$44",
    },
    {
      id: 4,
      name: " giving information Lorem Ipsum,",
      img: cartImg,
      price: "$44",
    },
    {
      id: 5,
      name: " giving information Lorem Ipsum,",
      img: cartImg,
      price: "$44",
    },
    {
      id: 6,
      name: " giving information Lorem Ipsum,",
      img: cartImg,
      price: "$44",
    },
  ];
  // onClick={handlShowCart}
  return (
    // top-0 right-0 fixed bottom-0  h-[100vh] w-full max-w-[500px]
    <div className="cartPart   h-full w-full  bg-white relative z-[88] max-w-[500px] ">
      <div className="relative h-full">
        <h2 className="section_title py-10 ">my cart</h2>

        <div className="carts h-[70vh]  overflow-x-auto thin">
          {cartProductData.map((data) => {
            return <CartProduct {...data} key={data.id} />;
          })}

        </div>
       
        <div className="buttonCart absolute bottom-30 left-0 right-0 px-4 bottom-0">
          <div className="totalPrice pb-4">
            <p className="subtotalCart inline-block float-left text-base font-semibold">
              Subtotal (2 items)
            </p>
            <p className="subtotalPriceCart inline-block float-right text-base font-semibold">
              $144
            </p>
          </div>
         <NavLink to="/checkout"> <Button classbtn="w-full mx-auto">checkout</Button></NavLink>
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
