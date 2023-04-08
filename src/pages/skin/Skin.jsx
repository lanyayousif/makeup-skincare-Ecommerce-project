import React, { useState } from "react";
import "./skin.css";
import Navbar from "../../component/navbar/Navbar";
import Filter from "../../component/filter/Filter";
import DropDownFilter from "../../component/filter/DropDownFilter";

function Skin() {
//   const [dropState, setDropState] = useState(false);
  const [sortType, setSortType] = useState("alphabetically, A-Z");
  const handleSort = (e) => {
    setSortType(e.target.value);
    console.log(sortType);
  };

//   const handleDropdown = () => {
//     setDropState(!dropState);
//   };

  return (
    <>
      <main className="relative">
        <Navbar />
        <section
          className="se_pageTitle bg-bg-main max-w-[1200px] w-[90%] mx-auto h-fit mt-[3vh] relative rounded 
        py-12 px-16 xsm:p-4 sm:p-8"
        >
          <h6 className="h6 text-center capitalize">FIND MY PERFECT</h6>
          <h2 className="section_title mt-8 ">SKIN CARE ROUTINE</h2>
        </section>

        <section
          className="se_filterAndproduct grid grid-cols-4 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 grid-rows-1 md:grid-rows-2 xsm:grid-rows-2 sm:grid-rows-2 
        section px-8 xsm:px-4 sm:px-4"
        >
          <div className="filters col-span-1  ">
            <div className="md:hidden xsm:hidden sm:hidden">
              <Filter />
            </div>

            <DropDownFilter/>

            {/* <div className=" dropdownFilter lg:hidden xl:hidden 2xl:hidden md:visible xsm:visible sm:visible w-full">
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
                    <span className="text-base capitalize xsm:text-sm ">
                      sort by
                    </span>
                    <select
                      name=""
                      onChange={handleSort}
                      id="sort"
                      value={sortType}
                      className="p-2  text-sm font-light capitalize rounded-sm xsm:ml-1 ml-3 w-[200px] xsm:w-[150px] md:border-none sm:border-none xsm:border-none
                  bg-bg-main"
                    >
                      <option value="alphabetically_AZ">
                        alphabetically, A-Z
                      </option>
                      <option value="alphabetically_ZA">
                        alphabetically, Z-A
                      </option>
                      <option value="pricelow">price, low to hight</option>
                      <option value="pricehigh">price, high to low</option>
                    </select>
                  </div>
                </div>

                <div className={`${dropState && "activeDrop"} filtercontent`}>
                  {" "}
                  <Filter />
                </div>
              </div>
            </div> */}
          </div>
          <div className="products col-span-3 xsm:col-span-1 sm:col-span-1">
            <div className="sortPart w-full md:hidden sm:hidden xsm:hidden ">
              <span className="itemsNumber text-base uppercase float-left">
                items:100
              </span>
              <div className="sortdiv inline-block w-fit h-fit float-right">
                <span className="text-base capitalize">sort by:</span>
                <select
                  name=""
                  onChange={handleSort}
                  id="sort"
                  value={sortType}
                  className="p-2 sort text-sm font-light capitalize rounded-sm ml-3 w-[200px]"
                >
                  <option value="alphabetically_AZ">alphabetically, A-Z</option>
                  <option value="alphabetically_ZA">alphabetically, Z-A</option>
                  <option value="pricelow">price, low to hight</option>
                  <option value="pricehigh">price, high to low</option>
                </select>
              </div>
            </div>

            <div className="productsColumns"></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Skin;
