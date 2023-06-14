import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons";
import "./counter.css"
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../../store/reducer/cartSlice";

function Counter({classConter,item}) {
  const dispatch =useDispatch()
  const a=useSelector(state=>state.cart.carts.cartItems[0])
  // console.log(a?.quantity)
  let quantity=a?.quantity ?? 0
  // let quantity=item.quantity ?? 0
  return (
    <div className={`w-24 productquantity rounded px-2 py-1 border-[1px] border-black ${classConter}`}>
      <button className="float-left text-lg" onClick={()=>{dispatch(increment(item))}}><FontAwesomeIcon icon={faPlus}/></button>
      {/* <input type="number" className="countNumber mx-8" onChange={handleInputChange} min="1" max="100" value={count}/> */}
      <span className="text_base text-center pl-[25%]">{quantity}</span>
      <button className="float-right text-lg" onClick={()=>{dispatch(decrement(item))}}><FontAwesomeIcon icon={faMinus}/></button>
    </div>
  );
}

export default Counter;
