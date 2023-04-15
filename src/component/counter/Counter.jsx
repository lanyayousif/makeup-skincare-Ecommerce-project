import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons";
import "./counter.css"
import { useDispatch } from "react-redux";
import { increment,decrement } from "../../store/reducer/cartSlice";

function Counter({classConter,item}) {
  const dispatch =useDispatch()
  let quantity=item.quantity
  return (
    <div className={`w-24 productQuantity rounded px-2 py-1 ${classConter}`}>
      <button className="float-left text-lg" onClick={()=>{dispatch(increment(item))}}><FontAwesomeIcon icon={faPlus}/></button>
      {/* <input type="number" className="countNumber mx-8" onChange={handleInputChange} min="1" max="100" value={count}/> */}
      <span className="text_base text-center pl-[25%]">{quantity}</span>
      <button className="float-right text-lg" onClick={()=>{dispatch(decrement(item))}}><FontAwesomeIcon icon={faMinus}/></button>
    </div>
  );
}

export default Counter;
