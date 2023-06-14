import React from 'react';
import CartProduct from '../../component/cart/CartProduct';
import cartImg from '../../assets/img/cartImgg.jpg';
import Footer from '../../component/footer/Footer';
import Navbar from '../../component/navbar/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../component/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals } from '../../store/reducer/cartSlice';
import { useAddProductToCartMutation } from '../../store/api/cart';

export default function Cartspage() {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [carts.cartItems]);

  const newObj = {
    // cartItems: [{productId:carts.cartItems.map((c) => c.productId._id), quantity:carts.cartItems.quantity}]
    cartItems: carts.cartItems.map((c) => ({
      productId: c.productId._id,
      quantity: c.quantity,
    })),
    totalQuantity: carts.totalQuantity,
    totalPrice: carts.totalPrice,
    // userId:carts.userId
  };

  // get and post to database
  const [addProductCart, { isLoading, isError }] =
    useAddProductToCartMutation();

  const handleCheackout = () => {
    console.log(newObj);
    addProductCart(newObj);
    if (addProductCart(newObj)) {
      navigate('/checkout');
    }
  };

  return (
    <>
      <main>
        <Navbar />
        <section className="se_login mt-[7vh] pb-16 px-4">
         { carts.cartItems===null?(<div className="cartts grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 ">
            {carts.cartItems.map((data) => {
              return (
                <div className="col-span-1">
                  <CartProduct {...data} key={data.productId._id} />
                </div>
              );
            })
            }
          </div>):
          (
              <div className="w-full max-w-3xl px-8 py-6 bg-bg-main mx-auto rounded mx-auto">
         <h1 className='h1 section_title'>your cart is empty</h1>
         <NavLink to="/skin"><h5 className='h5 font-semibold text-center my-11 underline underline-offset-1'>continue shopping</h5></NavLink>
      </div>
            )}

          <div className="mx-auto max-w-[500px] w-full mt-10">
              <button
                className="w-full mx-auto mx-auto mainButton"
                onClick={handleCheackout}
              >
                checkout
              </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
