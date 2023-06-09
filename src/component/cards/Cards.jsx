import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./cards.css";
import Card from "../card/Card";
import db from "../../../data/db.json";

import product from "../../assets/img/product.jpg";
import product2 from "../../assets/img/product2.jpg";
import { useSelector } from "react-redux";
import { useGetAllProdQuery, useGetAllProductsQuery } from "../../store/api/product.js";

function Cards({ discount, column }) {
  const {products} = useSelector((state) => state.product);
  const [params, setParams] = useState({search: ''});
  const { data: productsData, isLoading, error } = useGetAllProductsQuery(params);
  const { data: prodData, isLoading:productLoding, error:productError } = useGetAllProdQuery();

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

  useEffect(() => {
    if (products === undefined) {
      setParams(null);
    } else {
      setParams(products);
    }
  }, [products]);

  // const a=JSON.parse(localStorage.getItem("searchInput"));
  // console.log(a);

  return (
    <div className="  max-w-[98%] pl-[1%]">
      {/* flex align-middle justify-center  */}
      <div className=" xsm:mt-8  sm:mt-8 md:mt-8 mt-0  cards w-full">
        {column === "notcolumn" ? (
          <Slider {...settings}>
            {prodData?.data.map((data) => {
              if (discount && data.ProductDiscountPrice) {
                return <Card {...data} key={data._id} discountt={discount} />;
              } else if (!discount && !data.ProductDiscountPrice) {
                return <Card {...data} key={data._id} discountt={discount} />;
              }
            })}
          </Slider>
        ) : (
          <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 w-full">
            {productsData?.data.map((data) => {
              return <Card {...data} key={data._id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
