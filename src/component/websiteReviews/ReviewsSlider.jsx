import React from "react";
import "./reviewsSlider.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

import Reviews from "../reviews/Reviews";
import quote from "../../assets/img/quote.png";

function ReviewsSlider() {
  const ReviewsData = [
    {
      id: 1,
      username: "diya azad",
      raitingNumber: 4,
      review: `here are many variations of passages of 
            Lorem Ipsum available, but the majority have suffered
             alteration in some form, by injected humour, or randomised
              words which don't look even slightly believable. If you are   
               going to use a passage of Lorem Ipsum,`,
    },
    {
      id: 2,
      username: "hanar azad",
      raitingNumber: 4,
      review: `here are many variations of passages of 
            Lorem Ipsum available, but the majority have suffered
             alteration in some form, by injected humour, or randomised
              words which don't look even slightly believable. If you are   
               going to use a passage of Lorem Ipsum,`,
    },
    {
      id: 3,
      username: "zhina azad",
      raitingNumber: 4,
      review: `here are many variations of passages of 
            Lorem Ipsum available, but the majority have suffered
             alteration in some form, by injected humour, or randomised
              words which don't look even slightly believable. If you are   
               going to use a passage of Lorem Ipsum,`,
    },
    {
      id: 4,
      username: "naz azad",
      raitingNumber: 4,
      review: `here are many variations of passages of 
            Lorem Ipsum available, but the majority have suffered
             alteration in some form, by injected humour, or randomised
              words which don't look even slightly believable. If you are   
               going to use a passage of Lorem Ipsum,`,
    },
    {
      id: 5,
      username: "bnar azad",
      raitingNumber: 4,
      review: `here are many variations of passages of 
            Lorem Ipsum available, but the majority have suffered
             alteration in some form, by injected humour, or randomised
              words which don't look even slightly believable. If you are   
               going to use a passage of Lorem Ipsum,`,
    },
  ];

  return (
    <div className="mt-14">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: -10,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        slidesPerView={2}
        // centeredSlides
        style={{ height: "500px" }}
      >
        {ReviewsData.map((data) => {
          return (
            <SwiperSlide>
              <ReviewsCard {...data} key={data.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ReviewsSlider;

function ReviewsCard({ username, raitingNumber, review }) {
  return (
    <div className=" reviecard max-w-[544px] w-full py-10 mx-4 bg-bg-bejiKal rounded px-14 xsm:px-2 sm:px-4 relative ">
      <div className="rating mb-6 mx-auto w-fit ">
        <Reviews rating={raitingNumber} />
      </div>
      <p className="reviewText mb-6 text-center text-base xsm:text-sm">
        {review}
      </p>
      <h6 className="h6 text-center">{username}</h6>
      <img
        src={quote}
        alt="quote img"
        className="absolute bottom-[-25px] right-4"
      />
    </div>
  );
}
