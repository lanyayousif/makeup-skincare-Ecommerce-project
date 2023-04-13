import React,{useState} from "react";
import "./reviews.css";
import ReviewProduct from "../reviewProduct/ReviewProduct";
import SecondaryButton from "../button/SecondaryButton";
import Reviews from "../../component/reviews/Reviews";
import ReviewsForm from "../ReviewsForm/ReviewsForm";
function ReviewsProd({ ratingProduct, numberReviews }) {
  const reviewData = [
    {
      id: 1,
      fullName: "milan namiq",
      date: "2 day",
      SkinTone: "Medium Dark",
      SkinType: "Combination",
      periodUse: "0-3",
      Age: 23,
      raiting: 3,
      title: "New product is just not it",
      review: `A lovely creamy feel to this excellent
       night cream. It has an authentic fragrance of the forest, 
       one can detect the truffles in the mix. In the morning one’s face 
       feels soft and cared for. Do try it. Most impressive.it also included anti-aging which was
       exactly what I was looking for! plus exfoliate for my occasional breakouts.PERFECT SET!`,
    },
    {
      id: 2,
      fullName: "milan namiq",
      date: "2 day",
      SkinTone: "Medium Dark",
      SkinType: "Combination",
      periodUse: "0-3",
      Age: 23,
      raiting: 3,
      title: "New product is just not it",
      review: `A lovely creamy feel to this excellent
       night cream. It has an authentic fragrance of the forest, 
       one can detect the truffles in the mix. In the morning one’s face 
       feels soft and cared for. Do try it. Most impressive.it also included anti-aging which was
       exactly what I was looking for! plus exfoliate for my occasional breakouts.PERFECT SET!`,
    },
    {
      id: 3,
      fullName: "milan namiq",
      date: "2 day",
      SkinTone: "Medium Dark",
      SkinType: "Combination",
      periodUse: "0-3",
      Age: 23,
      raiting: 3,
      title: "New product is just not it",
      review: `A lovely creamy feel to this excellent
       night cream. It has an authentic fragrance of the forest, 
       one can detect the truffles in the mix. In the morning one’s face 
       feels soft and cared for. Do try it. Most impressive.it also included anti-aging which was
       exactly what I was looking for! plus exfoliate for my occasional breakouts.PERFECT SET!`,
    },
  ];


  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="mt-16 ">
      <div className="titleReviewss w-fit mx-auto my-16">
        <h2 className="xsm:h4 sm:h4 md:h4 h3 text-center text-purple-text uppercase">
          reviews
        </h2>
        <div className="ratingALl my-1">
          <Reviews rating={ratingProduct} />
          <span className="text-sm font-light">({numberReviews} Reviews) </span>
        </div>
        <div className="my-1 w-fit h-fit" onClick={toggleExpanded} >
          <SecondaryButton classBtn="text-black-text m-0"  >
            write a review
          </SecondaryButton>
        </div>
      </div>
      <div className={`reviewForm1 mb-10 ${isExpanded && "showform"} `}>
          <ReviewsForm />
        </div>
      {reviewData.map((data) => {
        return <ReviewProduct {...data} key={data.id} />;
      })}
    </div>
  );
}

export default ReviewsProd;
