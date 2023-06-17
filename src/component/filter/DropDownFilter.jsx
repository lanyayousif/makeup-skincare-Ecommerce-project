import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import { useDispatch } from "react-redux";
import { addSearchValue } from "../../store/reducer/productSlice";

export default function DropDownFilter() {
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState({sort:"alphaAZ"});
  const [dropState, setDropState] = useState(false);

  const handleDropdown = () => {
    setDropState(!dropState);
  };

  const handleSort = (e) => {
    const selectedValue = e.target.name;
    setSortType({[e.target.name]:e.target.value});
    // console.log(sortType);
  };


  useEffect(() => {
    dispatch(addSearchValue({ sort: sortType.sort  }));
  }, [sortType]);

  return (
    <>
      <div className=" dropdownFilter lg:hidden xl:hidden 2xl:hidden md:visible xsm:visible sm:visible w-full">
        <div className="mx-auto w-[90% ] max-w-[600px]">
          <button
            onClick={handleDropdown}
            className="dropbutton m-1 w-full  mx-auto  px-4 py-4 rounded uppercase "
          >
            filter by
          </button>
        </div>
        <div
          className={`${
            dropState && "activeDrop"
          }  dropdownContent menu px-2  py-6 shadow bg-base-100 rounded-box w-full`}
        >
          <div className="">
            <span className="itemsNumber text-base uppercase float-left inline-block xsm:text-sm mt-2">
              items:100
            </span>
            <div className="sortdiv inline-block w-fit h-fit float-right inline-block mb-6">
              <span className="text-base capitalize xsm:text-sm ">sort by</span>
              <select
                name="sorted"
                onChange={handleSort}
                id="sort"
                value={sortType.sort}
                className="p-2 text-sm font-light capitalize rounded-sm xsm:ml-1 ml-3 w-[200px] xsm:w-[150px] md:border-none sm:border-none xsm:border-none bg-bg-main"
              >
                <option value="alphaAZ">alphabetically, A-Z</option>
                <option value="alphaZA">alphabetically, Z-A</option>
                <option value="pricelow">price, low to high</option>
                <option value="pricehigh">price, high to low</option>
              </select>
            </div>
          </div>

          <div className={`${dropState && "activeDrop"} filtercontent`}>
            <Filter />
          </div>
        </div>
      </div>
    </>
  );
}
