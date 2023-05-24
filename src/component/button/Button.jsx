import React from "react";
import "./button.css";
function Button({ children, hide, classbtn, type }) {
  return (
    <button
      type={type}
      className={`${hide} ${classbtn} 
      main-btn mainButton  `}
    >
      {children}
    </button>
  );
}

export default Button;
