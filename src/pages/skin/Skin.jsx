import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./skin.css";
import Navbar from "../../component/navbar/Navbar";
import Filter from "../../component/filter/Filter";
import DropDownFilter from "../../component/filter/DropDownFilter";
import Cards from "../../component/cards/Cards";
import Footer from "../../component/footer/Footer";

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
          className="se_filterAndproduct grid grid-cols-5 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1  
        section px-8 xsm:px-0 sm:px-4"
        >
          <div className="filters col-span-1 px-4 ">
            <div className="md:hidden xsm:hidden sm:hidden">
              <Filter />
            </div>
            <DropDownFilter />
          </div>
          <div className="products col-span-4 xsm:col-span-1 sm:col-span-1">
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

            <div className="productsColumns">
              <Cards discount="all" column="Column" />
            </div>
          </div>
        </section>
        <div className="pageNumberPart w-fit mx-auto my-20">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="text-base capitalize font-medium mx-6">
            1 <span className="mx-2">of</span> 3
          </span>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Skin;
