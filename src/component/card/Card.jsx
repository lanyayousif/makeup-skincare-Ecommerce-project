import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducer/cartSlice";

import { NavLink } from "react-router-dom";
import "./card.css";
import heartimg from "../../assets/img/heart.svg";
import hearRed from "../../assets/img/hearRed.svg";
import product from "../../assets/img/product.jpg";
import product2 from "../../assets/img/product2.jpg";

import Button from "../button/Button";
import Reviews from "../reviews/Reviews";
import Heartbtn from "./Heartbtn";
import { useAddProductToCartMutation } from "../../store/api/cart.js";

function Card(producte) {
  // const [heart, setHeart] = useState(false);
  const [product_imgState, setProduct_imgState] = useState(false);
  const dispatch = useDispatch();
  const [addProductCart, { isLoading, isError }] =
    useAddProductToCartMutation();
  // const {
  //   discountt,
  //   id,
  //   productImgHover,
  //   productImg,
  //   ratingNumber,
  //   numberReviews,
  //   productName,
  //   productType,
  //   product_DiscountPrice,
  //   productPrice,
  //   quantity,
  // } = producte;

  const {
    ProductPrice,
    cart_items,
    catagoryId,
    productDescription,
    productDetailse,
    productType,
    productImgFree,
    productImgPage,
    productImgcard,
    productImgcardHover,
    productIntegrate,
    productLiked,
    productName,
    productRaiting,
    productReviews,
    productSize,
    productTitle,
    productUse,
    ProductDiscountPrice,
    quantity,
    __v,
    _id,
  } = producte;

  // const _id="643e7a7e8b33ba3e24412cac"

  return (
    <>
      <div
        key={_id}
        className="card xsm:m-2 sm:m-4 md:m-4 m-3  min-w-[280px] max-w-[360px] h-[500px] xsm:w-[290px] xsm:h-[400px] rounded "
      >
        <div
          className="imgCard-part w-full h-[280px] xsm:h-1/2 relative"
          onMouseOver={() => setProduct_imgState(true)}
          onMouseOut={() => setProduct_imgState(false)}
        >
          <Heartbtn
            heartRedImg={hearRed}
            heartImg={heartimg}
            heartClass="absolute top-5 right-5"
          />

          <NavLink to={`/product/${_id}`}>
            <img
              src={product_imgState ? productImgcard : productImgcardHover}
              alt="product image"
              className="w-full h-full rounded-t"
            />
          </NavLink>
        </div>
        <div className="card_about h-[220px] xsm:h-1/2 py-6 px-4  bg-bg-bejiKal rounded-b">
          <div className="rating_part">
            <div className="cardStars inline-block">
              <Reviews rating={productRaiting} />
            </div>

            <span className="font-light text-sm ml-3 ">
              ({productReviews} reviews)
            </span>
          </div>
          <h6 className="h6 productName pt-2 ">{productName}</h6>
          <p className="productType text-base pt-1 pb-1 font-light">
            {productType}
          </p>
          {ProductDiscountPrice ? (
            <h6 className=" h6 font-extralight ">
              <span className="line-through">{ProductPrice}$ </span>
              <span className="h6 price px-4 "> {ProductDiscountPrice}$ </span>
            </h6>
          ) : (
            <h6 className="h6 price ">${ProductPrice}</h6>
          )}
          <div className="w-fit h-fit mx-auto my-4 xsm:my-2">
            <button
              className="cardBtn"
              type="button"
              onClick={() => {
                // let item ={cartItems:[ {productId: producte._id ,quantity:1}] ,totalPrice:0};
                let item = { productId: producte, quantity: 1 };
                dispatch(addToCart(item));
              }}
            >
              add to card
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
