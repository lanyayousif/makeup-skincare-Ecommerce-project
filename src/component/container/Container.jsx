import React from "react";
import "./container.css";

export default function Container({ children }) {
  return (
    <div className=" xl:container lg:container containers sm:container    mx-auto">
      {children}
    </div>
  );
}
// md:container containers container
