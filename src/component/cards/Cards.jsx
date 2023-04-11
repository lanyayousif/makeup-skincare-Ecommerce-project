import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./cards.css";
import Card from "../card/Card";
import db from "../../../data/db.json";

import product from "../../assets/img/product.jpg";
import product2 from "../../assets/img/product2.jpg";

function Cards({ discount, column }) {
  const productInfor = [
    {
      id: 1,
      productImg: product,
      productImgHover: product2,
      ratingNumber: 3.5,
      numberReviews: "278",
      productName: "KLAIRS",
      productType: "Freshly Juiced Vitamin C Drop",
      productPrice: "$24",
      product_DiscountPrice: "",
    },
    {
      id: 2,
      productImg: product,
      productImgHover: product2,
      ratingNumber: 3.5,
      numberReviews: "278",
      productName: "KLAIRS",
      productType: "Freshly Juiced Vitamin C Drop",
      productPrice: "$24",
      product_DiscountPrice: "$10",
    },
    {
      id: 3,
      productImg: product,
      productImgHover: product2,
      ratingNumber: 3.5,
      numberReviews: "278",
      productName: "KLAIRS",
      productType: "Freshly Juiced Vitamin C Drop",
      productPrice: "$24",
      product_DiscountPrice: "",
    },
    {
      id: 4,
      productImg: product,
      productImgHover: product2,
      ratingNumber: 3.5,
      numberReviews: "278",
      productName: "KLAIRS",
      productType: "Freshly Juiced Vitamin C Drop",
      productPrice: "$24",
      product_DiscountPrice: "$10",
    },
    {
      id: 5,
      productImg: product,
      productImgHover: product2,
      ratingNumber: 3.5,
      numberReviews: "278",
      productName: "KLAIRS",
      productType: "Freshly Juiced Vitamin C Drop",
      productPrice: "$24",
      product_DiscountPrice: "",
    },
    {
      id: 6,
      productImg: product,
      productImgHover: product2,
      ratingNumber: 3.5,
      numberReviews: "278",
      productName: "KLAIRS",
      productType: "Freshly Juiced Vitamin C Drop",
      productPrice: "$24",
      product_DiscountPrice: "$10",
    },
    {
      id: 7,
      productImg: product,
      productImgHover: product2,
      ratingNumber: 3.5,
      numberReviews: "278",
      productName: "KLAIRS",
      productType: "Freshly Juiced Vitamin C Drop",
      productPrice: "$24",
      product_DiscountPrice: "",
    },
    {
      id: 8,
      productImg: product,
      productImgHover: product2,
      ratingNumber: 3.5,
      numberReviews: "278",
      productName: "KLAIRS",
      productType: "Freshly Juiced Vitamin C Drop",
      productPrice: "$24",
      product_DiscountPrice: "$10",
    },
    {
      id: 9,
      productImg: product,
      productImgHover: product2,
      ratingNumber: 3.5,
      numberReviews: "278",
      productName: "KLAIRS",
      productType: "Freshly Juiced Vitamin C Drop",
      productPrice: "$24",
      product_DiscountPrice: "",
    },
    {
      id: 10,
      productImg: product,
      productImgHover: product2,
      ratingNumber: 3.5,
      numberReviews: "278",
      productName: "KLAIRS",
      productType: "Freshly Juiced Vitamin C Drop",
      productPrice: "$24",
      product_DiscountPrice: "$10",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1085,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log("column" + column);
  return (
    <div className="  max-w-[98%] pl-[1%]">
      {/* flex align-middle justify-center  */}
      <div className=" xsm:mt-8  sm:mt-8 md:mt-8 mt-0  cards w-full">
        {column === "notcolumn" ? (
          <Slider {...settings}>
            {productInfor.map((data) => {
              if (discount && data.product_DiscountPrice) {
                return <Card {...data} key={data.id} discountt={discount} />;
              } else if (!discount && !data.product_DiscountPrice) {
                return <Card {...data} key={data.id} discountt={discount} />;
              }
            })}
          </Slider>
        ) : (
          <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 w-full">
            {productInfor.map((data) => {
              return <Card {...data} key={data.id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
