import React from "react";
import "./checkout.css";
import Logo from "../../component/logo/Logo";
import { NavLink } from "react-router-dom";
import Button from "../../component/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import cartImg from "../../assets/img/cartImg.jpg";

function Checkout() {
  const productONCartData = [
    {
      id: 1,
      name: "Scent Free 24-Hour Cream 50ml",
      img: cartImg,
      price: "$14",
    },
    {
      id: 1,
      name: " Cream 50ml",
      img: cartImg,
      price: "$34",
    },
    {
      id: 1,
      name: " Cream 50ml",
      img: cartImg,
      price: "$34",
    },
  ];

  return (
    <>
      <main className="checkout relative  min-h-[100vh]">
        <div className="w-full h-full flex justify-center  flex-row min-h-[100vh] md:flex-col sm:flex-col xsm:flex-col">
          <div className="contactPart lg:basis-7/12 xl:basis-7/12 2xl:basis-7/12 px-10 xsm:px-4 pt-10 pb-14">
            <Logo />
            <form action="#" className="mt-8 mx-auto max-w-[660px]">
              <div className="Emailpart h-fit ">
                <div className="relative flex flex-row justify-between items-center xsm:flex-col-reverse  w-[90%] xsm:w-full max-w-[600px]">
                  <h3 className="h5 xsm:h6  ">Contact Information</h3>
                  <p className="text-base xsm:text-sm  ">
                    Already have an account? <NavLink to="/">login</NavLink>
                  </p>
                </div>
                <div className="emailInput pt-4  h-fit">
                  <input
                    type="email"
                    placeholder="Email"
                    className="checkInput block w-[90%]  xsm:w-[100%]  max-w-[600px] bg-transparent h-14 rounded px-4"
                    name="email"
                  />
                </div>
              </div>
              <div className="shppingAdresspart mt-16">
                <h3 className="h5 xsm:h6 ">Shipping Address</h3>
                <div className="shippingInput   h-fit">
                  <input
                    type="text"
                    placeholder="country/region"
                    className="checkInput block w-[90%] xsm:w-[100%]  max-w-[600px] bg-transparent h-14 rounded px-4 my-4"
                    name="country/region"
                  />
                  <div className="fullname  w-[90%]  xsm:w-[100%]  max-w-[600px] flex justify-between">
                    <input
                      type="text"
                      placeholder="First name"
                      className="checkInput block bg-transparent h-14 rounded px-4 my-4 w-full mr-2"
                      name="First name"
                    />
                    <input
                      type="text"
                      placeholder="last name"
                      className="checkInput block bg-transparent h-14 rounded px-4 my-4 w-full ml-2"
                      name="last name"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="address"
                    className="checkInput block w-[90%] xsm:w-[100%]  max-w-[600px] bg-transparent h-14 rounded px-4 my-2"
                    name="address"
                  />
                  <input
                    type="text"
                    placeholder="apartment ,suit, etc "
                    className="checkInput block w-[90%] xsm:w-[100%]  max-w-[600px] bg-transparent h-14 rounded px-4 my-6"
                    name="apartment ,suit, etc "
                  />
                  <input
                    type="text"
                    placeholder="city"
                    className="checkInput block w-[90%] xsm:w-[100%] max-w-[600px] bg-transparent h-14 rounded px-4 my-6"
                    name="city"
                  />
                  <input
                    type="text"
                    placeholder="phone"
                    className="checkInput block w-[90%]  xsm:w-[100%]  max-w-[600px] bg-transparent h-14 rounded px-4 my-6"
                    name="phone"
                  />
                </div>
              </div>
              <div className="buttonAndReturnPart  w-[90%] xsm:w-full xsm:flex-col-reverse max-w-[590px] flex justify-between items-center">
                <div className="returnCart">
                  <NavLink to="/">
                    {" "}
                    <p className="text-base font-light">
                      <FontAwesomeIcon icon={faChevronLeft} />
                      Return to cart
                    </p>
                  </NavLink>
                </div>
                <Button classbtn="mx-0" type="submit">
                  Continue to Shipping
                </Button>
              </div>
            </form>
          </div>
          <div className="totalProduct_part lg:basis-5/12 xl:basis-5/12 2xl:basis-5/12  bg-bg-bejiKal pt-20 pb-16 ">
            <div className="mx-auto max-w-[660px]">
              {productONCartData.map((data) => {
                return <ProductONCart {...data} key={data.id} />;
              })}

              <div className="totalAndsub mx-8 xsm:mx-4 pt-32">
                <div className="subtotal py-5 mb-10">
                  <p className="text-base font-medium capitalize inline-block float-left">
                    subtotal
                  </p>
                  <p className="subtotalPrice inline-block float-right font-semibold">
                    $122
                  </p>
                </div>
                <div className="subtotal py-5">
                  <p className="text-base font-medium capitalize inline-block float-left">
                    total
                  </p>
                  <p className="subtotalPrice inline-block float-right font-semibold">
                    $122
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Checkout;

function ProductONCart({ name, img, price }) {
  return (
    <div className="productONCart my-8 mx-8 xsm:mx-4 flex justify-between items-center">
      <div className="nameAndImgProduct flex items-center ">
        <div
          className="PcartImg w-24 h-20 xsm:w-16 xsm:h-16 min-w-16 rounded inline-block mr-6 relative xsm:basis-16"
          notiffi="5"
        >
          <img
            src={img}
            alt="product image"
            className="w-full h-full object-fill object-center rounded"
          />
        </div>
        <p className="productNameCart inline-block text-base ">{name}</p>
      </div>
      <p className="pricePro text-base text-purple-text">{price}</p>
    </div>
  );
}
