import React from 'react'
import './ProductImgSlider.css'
import Slider from 'react-slick'
// import pro_page from '../../assets/img/'
import product1 from "../../assets/img/pro_page.jpg";
import product2 from "../../assets/img/pro_page (2).jpg";
import product3 from "../../assets/img/pro_page (3).jpg";
import product4 from "../../assets/img/pro_page (4).jpg";



function ProductImgSlider() {

    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={product1}  className='w-full h-full'/>
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

  return (
    <div className='productSliderPade'>
    <h2>Custom Paging</h2>
    <Slider {...settings}>
      <div>
        <img src={product1}   className='w-full h-full'/>
      </div>
      <div>
        <img src={product2}  className='w-full h-full'/>
      </div>
      <div>
        <img src={product3}  className='w-full h-full'/>
      </div>
      <div>
        <img src={product4}  className='w-full h-full'/>
      </div>
    </Slider>
  </div>
  )
}

export default ProductImgSlider