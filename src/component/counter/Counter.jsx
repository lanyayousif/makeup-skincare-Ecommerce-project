import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons";
import "./counter.css"

function Counter({classConter}) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if(count<100){
    setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if(count>0){
        setCount((prevCount) => prevCount - 1);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    if (!isNaN(inputValue)) {
      setCount(inputValue);
    }
  };
  console.log("counter " + count);
  return (
    <div className={`w-24 productQuantity rounded px-2 py-1 ${classConter}`}>
      <button className="float-left text-lg" onClick={handleIncrement}><FontAwesomeIcon icon={faPlus}/></button>
      {/* <input type="number" className="countNumber mx-8" onChange={handleInputChange} min="1" max="100" value={count}/> */}
      <span className="text_base text-center pl-[25%]">{count}</span>
      <button className="float-right text-lg" onClick={handleDecrement}><FontAwesomeIcon icon={faMinus}/></button>
    </div>
  );
}

export default Counter;
