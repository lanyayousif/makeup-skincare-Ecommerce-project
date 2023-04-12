import React, { useState } from 'react'
import heartimg from "../../assets/img/heart.svg";
import hearRed from "../../assets/img/hearRed.svg";

export default function Heartbtn({heartRedImg,heartImg,heartClass}) {
    const [heart, setHeart] = useState(false);
  return (
    <button
            className={`${heartClass}`}
            onMouseEnter={() => setHeart(!heart)}
          >
            <img
              src={heart == true ? hearRed : heartimg}
              alt="heart image"
              className="w-full h-full object-contain object-center"
            />
          </button>
  )
}
