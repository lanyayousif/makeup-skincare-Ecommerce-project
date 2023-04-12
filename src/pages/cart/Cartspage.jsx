import React from "react";
import CartProduct from "../../component/cart/CartProduct";
import cartImg from "../../assets/img/cartImgg.jpg";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import { NavLink } from "react-router-dom";
import Button from "../../component/button/Button";

export default function Cartspage() {
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

  return (
    <>
      <main>
        <Navbar />
        <section className="se_login mt-[7vh] pb-16 px-4">
          <div className="cartts grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 ">
            {cartProductData.map((data) => {
              return (
                <div className="col-span-1">
                  <CartProduct {...data} key={data.id} />
                </div>
              );
            })}
          </div>

          <div className="mx-auto max-w-[500px] w-full mt-10">
            <NavLink to="/checkout">
              <Button classbtn="w-full mx-auto mx-auto ">
                checkout
              </Button>
            </NavLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
