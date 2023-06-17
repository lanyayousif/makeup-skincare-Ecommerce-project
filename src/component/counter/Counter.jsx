import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/reducer/cartSlice';

function Counter({ classConter, item }) {
  const [countt, setCountt] = useState(0);
  const [quantityy, setQuantityy] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.carts.cartItems);

  useEffect(() => {
    const productItem = cartItems.find(
      (product) => product.productId._id === item.productId._id
    );
    if (productItem) {
      setQuantityy(productItem.quantity);
      console.log("productItem.quantity ="+productItem.quantity)
    } else {
      setQuantityy(null);
    }
  }, [cartItems, item]);

  const quantity=quantityy??countt

  const handleIncrement = () => {
    dispatch(increment(item));
    setCountt(countt + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement(item));
    if(countt>=1){
      setCountt(countt -1);
    }
  };

  console.log("countt ="+countt)
  console.log("quantity ="+quantityy)

  // console.log("a?.quantity ="+a?.quantity)
  return (
    <div
      className={`w-24 productquantity rounded px-2 py-1 border-[1px] border-black ${classConter}`}
    >
      <button className="float-left text-lg" onClick={handleIncrement}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      {/* <input type="number" className="countNumber mx-8" onChange={handleInputChange} min="1" max="100" value={count}/> */}
      <span className="text_base text-center pl-[25%]">{quantity}</span>
      <button className="float-right text-lg" onClick={handleDecrement}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
}

export default Counter;
