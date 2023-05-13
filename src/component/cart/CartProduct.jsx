import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { remove,increment,decrement } from "../../store/reducer/cartSlice";

import cartImg from "../../assets/img/cartImgg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import Counter from "../counter/Counter";


function CartProduct(cartProducte) {

  const dispatch=useDispatch()
  console.log(cartProducte)
  const { productId:{_id, productImgcard, productName, ProductPrice},quantity} = cartProducte;

  return (
    <div className="cardtProduct w-[95%] mx-auto rounded bg-bg-bejiKal  mb-7 max-w-[800px]" key={_id}>
      <div className="flex  items-start w-full h-[120px]">
        <div className="CartImg rounded-t rounded-b h-full w-3/12">
          <img
            src={productImgcard}
            alt="product image"
            className="w-full h-full object-fill object-center rounded-t rounded-b"
          />
        </div>
        <div className="cart_productname py-2 w-9/12 px-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-base">{productName}</p>
            <button onClick={()=>{dispatch(remove(cartProducte)) }}>
            <span className="trash"  >
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
            </button>
          </div>

          <div className="flex items-center justify-between py-2">
            <Counter item={cartProducte} />
            <p className="text-purple-text">${ProductPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
