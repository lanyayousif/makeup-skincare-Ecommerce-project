import React, { useState } from "react";
import "./skin.css";
import Navbar from "../../component/navbar/Navbar";
import Filter from "../../component/filter/Filter";
import DropDownFilter from "../../component/filter/DropDownFilter";

function Skin() {
  const [sortType, setSortType] = useState("alphabetically, A-Z");
  const handleSort = (e) => {
    setSortType(e.target.value);
    console.log(sortType);
  };

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

            <DropDownFilter />
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
