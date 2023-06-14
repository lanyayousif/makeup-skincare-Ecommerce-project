import React, { useState } from 'react';
import { useGetProductsByIdQuery } from '../../store/api/product.js';
import Footer from '../../component/footer/Footer';
import Navbar from '../../component/navbar/Navbar';
import Reviews from '../../component/reviews/Reviews';
import product1 from '../../assets/img/pro_page.jpg';
import product2 from '../../assets/img/pro_page (2).jpg';
import product3 from '../../assets/img/pro_page (3).jpg';
import product4 from '../../assets/img/pro_page (4).jpg';
import imgproductFree from '../../assets/img/gluten-free.png';
import imgproductFree2 from '../../assets/img/cruelty-free.png';
import imgproductFree3 from '../../assets/img/vegan.png';

import './product.css';
import Counter from '../../component/counter/Counter';
import Button from '../../component/button/Button';
import Heartbtn from '../../component/card/Heartbtn';
import ProductImgSlider from '../../component/ProductImgSlider/ProductImgSlider';
import ReviewsProd from '../../component/ReviewssProduct/ReviewsProd';
import Cards from '../../component/cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../store/reducer/cartSlice.js';

function Product() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { data: singleProduct, isLoading, error } = useGetProductsByIdQuery(id);

  const { products } = useSelector((state) => state.product);

  const [detailOpen, SetDetailOpen] = useState(true);
  const [useOpen, SetUseOpen] = useState(false);
  const [ingredientsOpen, SetIngredientsOpen] = useState(false);

  const handldetails = () => {
    SetDetailOpen(!detailOpen);
    SetUseOpen(false);
    SetIngredientsOpen(false);
  };
  const handleUse = () => {
    SetUseOpen(!useOpen);
    SetDetailOpen(false);
    SetIngredientsOpen(false);
  };

  const handleIngredients = () => {
    SetIngredientsOpen(!ingredientsOpen);
    SetUseOpen(false);
    SetDetailOpen(false);
  };
  const handleAddToCart = () => {
    let item = { productId: singleProduct?.data, quantity: 1 };
    // console.log(item)
    dispatch(addToCart(item));
  };

  //   if(useOpen===false && ingredientsOpen ===false){
  //     SetDetailOpen(true)
  //   }
  //   console.log("detailOpen"+detailOpen)
  //   console.log("useOpen"+useOpen)
  //   console.log("ingredientsOpen"+ingredientsOpen)

  // console.log({...singleProduct?.data,quantity:0})
  return (
    <>
      <main>
        <Navbar />

        <section className=" mt-[7vh]  px-4 relative ">
          <div className="div se1_product grid grid-cols-2">
            <div className="imgsProduct col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 xsm:mb-20 sm:mb-20 ">
              {/* <ProductImgSlider/> */}

              <img
                src={singleProduct?.data?.productImgcardHover}
                alt="product image"
                className="w-full h-full max-w-[500px] max-h-[600px] mx-auto rounded-t"
              />
            </div>
            <div className="AboutProduct col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1   px-4">
              <div className="aboutPart max-w-[600px] xsm:mx-auto sm:mx-auto md:mx-auto">
                <div className="ratingsPro  flex items-center justify-between relative">
                  <div className="">
                    <Reviews rating={singleProduct?.data?.productRaiting} />
                    <span className="reviesProduct text-base ml-2 text-lightBlack-text">{`(${singleProduct?.data.productReviews})`}</span>
                  </div>
                  <Heartbtn />
                </div>
                <div className="sizeProduct my-2">
                  <p className="text-base font-medium capitalize">
                    {singleProduct?.data.productSize}
                  </p>
                </div>
                <h2 className="text-purple-text xsm:h4 sm:h4 md:h4 h3">
                  {singleProduct?.data.productSize}
                </h2>
                <p className="productPrice text-base font-medium mt-2">{`$ ${singleProduct?.data.ProductPrice}`}</p>
                <p className="aboutProduct text-base font-light mt-10">
                  my makeup melting cleanser is a cream-to-oil cleanser that
                  efficiently melts away makeup and impurities leaving skin
                  cleansed, nourished, and radiant. this lightweight formula is
                  non-drying, gentle enough for the eyes, and doesn’t leave
                  behind any residue.
                </p>

                <div className="imgPro grid grid-cols-4 my-10 w-fit ">
                  {singleProduct?.data.productImgFree.map((img) => {
                    //abe key habe
                    return (
                      <div
                        className="col-span-1 max-w-[40px] max-h-[40px] mr-4"
                        key={img}
                      >
                        <img
                          src={img}
                          alt="image detail"
                          className="w-full h-full object-contain object-center"
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="button_counterPart grid grid-cols-4 xsm:grid-cols-1 ">
                  <div className="col-span-1 xsm:my-2">
                    {/* <Counter classConter="w-[95%] mx-auto py-2" item={{...singleProduct?.data,quantity:0}} /> */}
                    <Counter
                      classConter="w-[95%] mx-auto py-2"
                      item={{ productId: singleProduct?.data, quantity: 1 }}
                    />
                  </div>
                  <div className="col-span-3 xsm:col-span-1 xsm:my-2 ">
                    <button
                      className="mainButton m-0 w-full ProductBtn "
                      onClick={handleAddToCart}
                    >
                      add to card - $ {singleProduct?.data.ProductPrice}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="productDetails bg-bg-bejiKal mt-20 ">
          <div className="detaiTitlePart">
            <div className="w-fit mx-auto py-6">
              <button
                className={`mx-4 text-base font-semibold capitalize  ${
                  detailOpen && 'focusBtn'
                }`}
                onClick={handldetails}
              >
                Product Details
              </button>
              <button
                className="mx-4 text-base font-semibold capitalize"
                onClick={handleUse}
              >
                How to Use
              </button>
              <button
                className="mx-4 text-base font-semibold capitalize"
                onClick={handleIngredients}
              >
                Ingredients
              </button>
            </div>
          </div>

          <div className="detalsInformation max-w-[1200px] mx-auto py-6 px-4">
            {/* detailse */}
            <div className={`detailsProduct ${detailOpen && 'detailOpen'}`}>
              <p className="text-base font-medium ">
                A midnight feast of skin nutrients, this night cream features
                Northern Truffle, wild harvested in Finnish forests under the
                magical glow of the Northern Lights.
              </p>
              <div className="childdetalPart max-w-[900px] pt-4">
                <p className="text-base font-light py-4">
                  Enriched with radiance-boosting actives that replenish
                  hydration to counteract dryness and irritation, this soothing
                  skin cream is perfect who hold a healthy, hydrated complexion
                  as the ultimate skin goal.
                </p>
                <p className="text-base font-light py-4">
                  Enriched with radiance-boosting actives that replenish
                  hydration to counteract dryness and irritation, this soothing
                  skin cream is perfect who hold a healthy, hydrated complexion
                  as the ultimate skin goal.
                </p>
                <p className="text-base font-light py-4">
                  Enriched with radiance-boosting actives that replenish
                  hydration to counteract dryness and irritation, this soothing
                  skin cream is perfect who hold a healthy, hydrated complexion
                  as the ultimate skin goal.
                </p>
              </div>
            </div>
            {/* use */}
            <div className={`useProduct ${useOpen && 'useOpen'}`}>
              <p className="text-base font-medium ">
                A midnight feast of skin nutrients, this night cream features
                Northern Truffle, wild harvested in Finnish forests under the
                magical glow of the Northern Lights.
              </p>
              <div className="childdetalPart max-w-[900px] pt-4">
                <p className="text-base font-light py-4">
                  Enriched with radiance-boosting actives that replenish
                  hydration to counteract dryness and irritation, this soothing
                  skin cream is perfect who hold a healthy, hydrated complexion
                  as the ultimate skin goal.
                </p>
              </div>
            </div>
            {/* ingredient */}
            <div
              className={`ingredientProduct ${
                ingredientsOpen && 'ingredientsOpen'
              } `}
            >
              <p className="text-base font-medium ">
                A midnight feast of skin nutrients, this night cream features
                Northern Truffle, wild harvested in Finnish forests under the
                magical glow of the Northern Lights.
              </p>
              <div className="childdetalPart max-w-[900px] pt-4">
                <p className="text-base font-light py-4">
                  Enriched with radiance-boosting actives that replenish
                  hydration to counteract dryness and irritation, this soothing
                  skin cream is perfect who hold a healthy, hydrated complexion
                  as the ultimate skin goal.
                </p>
                <p className="text-base font-light py-4">
                  Enriched with radiance-boosting actives that replenish
                  hydration to counteract dryness and irritation, this soothing
                  skin cream is perfect who hold a healthy, hydrated complexion
                  as the ultimate skin goal.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="productRecomend pb-20 pt-10 ">
          <h2 className="section_title py-16">YOU MAY ALSO LIKE</h2>
          <Cards discount={false} column="notcolumn" />
        </section>
        <section className="reviewsProduct">
          <ReviewsProd
            ratingProduct={singleProduct?.data.productRaiting}
            numberReviews={singleProduct?.data.productReviews}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Product;
