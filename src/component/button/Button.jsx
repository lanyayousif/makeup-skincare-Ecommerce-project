import React from "react";
import "./button.css";
function Button({ children, hide, classbtn, type }) {
  return (
    <button
      type={type}
      className={`${hide} ${classbtn} 
      main-btn xsm:px-4 px-8 py-4 w-fit bg-bg-second uppercase text-base font-bold m-4 rounded text-white-text  `}
    >
      {children}
    </button>
  );
}

export default Button;
