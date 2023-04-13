import React from "react";
import "./reviews.css";
import Reviews from "../reviews/Reviews";

function ReviewsProduct(
 { fullName,
  date,
  SkinTone,
  SkinType,
  periodUse,
  Age,
  raiting,
  title,
  review}
) {
  return (
    <div className="reviewProduct p-4 bg-bg-bejiKal w-full h-fit rounded my-6 max-w-[990px] mx-auto">
      <div className="flex grid grid-cols-12 ">
        <div className="userInfor col-span-3 md:col-span-4 sm:col-span-12 xsm:col-span-12 ">
          <div className="nameReview  ">
            <div className="nameBox bg-bg-second  w-full max-w-[70px] h-[70px] rounded-[50%] mx-4 inline-block xsm:ml-0 sm:ml-0">
              <p className="uppercase text-2xl font-bold text-white-text text-center pt-[25%]">
                MN
              </p>
            </div>
            <div className="nameAndDay inline-block">
              <p className="text-base font-medium capitalize">{fullName}</p>
              <p className="text-sm font-light capitalize">{date} ago</p>
            </div>
          </div>
          <div className="mt-3 ml-6 xsm:mx-0 sm:mx-0">
            <p className=" text-sm font-light capitalize my-1">
              <span className="text-sm font-normal mr-1">Skin Tone</span>
             {SkinTone}
            </p>
            <p className=" text-sm font-light capitalize my-1">
              <span className="text-sm font-normal mr-1">Skin Type:</span>
              {SkinType}
            </p>
            <p className=" text-sm font-light capitalize my-1">
              <span className="text-sm font-normal mr-1">
                Used this product for:
              </span>
             {periodUse} months
            </p>
            <p className=" text-sm font-light capitalize my-1">
              <span className="text-sm font-normal mr-1">age :</span>{Age}
            </p>
          </div>
        </div>
        <div className="userReview col-span-9 md:col-span-8 sm:col-span-12 xsm:col-span-12  sm:mt-4  xsm:mt-4">
          <div className=""><Reviews rating={raiting} /></div>
          <p className="reviewTitle text-base font-medium mt-4">
            {title}
          </p>
          <p className="text-sm font-normal mt-4">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewsProduct;
