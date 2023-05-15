import React from "react";

function SecondaryButton({ children, classBtn }) {
  return (
    <button
      className={`${classBtn} secondButton`}
      type="submit"
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
