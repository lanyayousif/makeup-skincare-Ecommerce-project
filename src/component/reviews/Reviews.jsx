import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

export default function Reviews({ rating }) {
  const ratingNumber = rating;
  const starIcon = [];
  const fullStart = Math.floor(ratingNumber);
  const halfStart = ratingNumber % 2 !== 0;
  const haffNumber = fullStart;

  for (let i = 0; i < 5; i++) {
    if (i < fullStart) {
      starIcon.push(
        <FontAwesomeIcon icon={faStar} className={"checked"} key={i} />
      );
    } else if (halfStart && i == haffNumber) {
      starIcon.push(
        <FontAwesomeIcon icon={faStarHalfAlt} className={"checked"} key={i} />
      );
    } else {
      starIcon.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
  }
  return <>{starIcon}</>;
}
