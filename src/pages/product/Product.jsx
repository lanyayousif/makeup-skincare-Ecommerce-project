import React from "react";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Reviews from "../../component/reviews/Reviews";
import product1 from "../../assets/img/pro_page.jpg";
import product2 from "../../assets/img/pro_page (2).jpg";
import product3 from "../../assets/img/pro_page (3).jpg";
import product4 from "../../assets/img/pro_page (4).jpg";
import imgproductFree from "../../assets/img/gluten-free.png";
import imgproductFree2 from "../../assets/img/cruelty-free.png";
import imgproductFree3 from "../../assets/img/vegan.png";
// import heartimg from "../../assets/img/heart.svg";
// import hearRed from "../../assets/img/hearRed.svg";

import "./product.css";
import Counter from "../../component/counter/Counter";
import Button from "../../component/button/Button";
import Heartbtn from "../../component/card/Heartbtn";

function Product() {
  const productdata = [
    {
      id: 1,
      name: " test ",
      ratingNumber: 4,
      revies: 25,
      size: "4 Fl oz",
      price: 24,
      imgsproduct:[product1,product2,product3,product4],
      imgfree:[imgproductFree,imgproductFree2,imgproductFree3]
    },
  ];
  console.log(" product " + productdata[0].ratingNumber);
  return (
    <>
      <main>
        <Navbar />

        <section className=' mt-[7vh] pb-16 px-4 relative '>
          <div className="div se1_product grid grid-cols-2">
            <div className="imgsProduct col-span-1 ">
                
            </div>
            <div className="AboutProduct col-span-1 px-4">
              <div className="aboutPart max-w-[600px]">
                <div className="ratingsPro  flex items-center justify-between relative">
                  <div className="">
                  <Reviews rating={productdata[0].ratingNumber} />
                  <span className="reviesProduct text-base ml-2 text-lightBlack-text">{`(${productdata[0].revies})`}</span>
                  </div>
                  <Heartbtn/>
                </div>
                <div className="sizeProduct my-2">
                  <p className="text-base font-medium capitalize">
                    {productdata[0].size}
                  </p>
                </div>
                <h2 className="text-purple-text xsm:h4 sm:h4 md:h4 h3">
                  Flower Water Toner
                </h2>
                <p className="productPrice text-base font-medium mt-2">{`$ ${productdata[0].price}`}</p>
                <p className="aboutProduct text-base font-light mt-10">
                  my makeup melting cleanser is a cream-to-oil cleanser that
                  efficiently melts away makeup and impurities leaving skin
                  cleansed, nourished, and radiant. this lightweight formula is
                  non-drying, gentle enough for the eyes, and doesn’t leave
                  behind any residue.
                </p>


                <div className="imgPro grid grid-cols-4 my-10 w-fit ">
                    {
                        productdata[0].imgfree.map(img=>{
                            return (
                                <div className="col-span-1 max-w-[40px] max-h-[40px] mr-4">
                                   <img src={img} alt="image detail" className="w-full h-full object-contain object-center" />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="button_counterPart grid grid-cols-4 xsm:grid-cols-1 ">
                        <div className="col-span-1 xsm:my-2"><Counter classConter="w-[95%] mx-auto py-2"/></div>
                        <div className="col-span-3 xsm:col-span-1 xsm:my-2 "><Button classbtn="m-0 w-full ProductBtn ">add to card - $ { productdata[0].price}</Button></div>
                    </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Product;
