import React from "react";

function SecondaryButton({ children, classBtn }) {
  return (
    <button
      className={`${classBtn} second-btn  xsm:px-4 px-8 py-4 w-full max-w-[240px] mx-auto
       bg-bg-main capitalize text-lg font-bold m-4 rounded text-purple-text  hover:filter brightness-90 hover:brightness-100`}
      type="submit"
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
