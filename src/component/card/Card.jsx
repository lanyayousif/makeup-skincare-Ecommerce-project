import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./card.css";
import heartimg from "../../assets/img/heart.svg";
import hearRed from "../../assets/img/hearRed.svg";
import product from "../../assets/img/product.jpg";
import product2 from "../../assets/img/product2.jpg";

import Button from "../button/Button";
import Reviews from "../reviews/Reviews";

function Card({discountt,id,productImgHover,productImg,ratingNumber,numberReviews,productName,productType,product_DiscountPrice,productPrice}) {
  const [heart, setHeart] = useState(false);
  const [product_imgState, setProduct_imgState] = useState(false);

  return (
    <>
    {/* { productInformation.map((item) =>{return ( */}
    <div key={id} className="card xsm:m-2 sm:m-4 md:m-4 m-3 w-[350px] h-[500px] xsm:w-[290px] xsm:h-[400px] rounded ">
      <div
        className="imgCard-part w-full h-[280px] xsm:h-1/2 relative"
        onMouseOver={() => setProduct_imgState(true)}
        onMouseOut={() => setProduct_imgState(false)}
      >
        <button
          className="absolute top-5 right-5"
          onMouseEnter={() => setHeart(!heart)}
        >
          <img
            src={heart == true ? hearRed : heartimg}
            alt="heart image"
            className="w-full h-full object-contain object-center"
          />
        </button>

        <NavLink to="/">
          <img
            src={product_imgState ? productImgHover : productImg}
            alt="product image"
            className="w-full h-full rounded-t"
          />
        </NavLink>
      </div>
      <div className="card_about h-[220px] xsm:h-1/2 py-6 px-4  bg-bg-bejiKal rounded-b">
        <div className="rating_part">
          <div className="cardStars inline-block">
            <Reviews rating={ratingNumber} />
          </div>

          <span className="font-light text-sm ml-3 ">({numberReviews} reviews)</span>
        </div>
        <h6 className="h6 productName pt-2 ">{productName}</h6>
        <p className="productType text-base pt-1 pb-1 font-light">
          {productType}
        </p>
        {product_DiscountPrice?
        <h6 className=" h6 font-extralight "><span className="line-through">{productPrice}</span> <span className="h6 price ">{product_DiscountPrice}</span></h6>
        : <h6 className="h6 price ">{productPrice}</h6>}
        <div className="w-fit h-fit mx-auto my-4 xsm:my-2">
          <button className="cardBtn">add to card</button>
        </div>
      </div>
    </div>
    {/* )})} */}
    </>
  );
}

export default Card;
