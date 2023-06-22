import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faL } from "@fortawesome/free-solid-svg-icons";
import "./skin.css";
import Navbar from "../../component/navbar/Navbar";
import Filter from "../../component/filter/Filter";
import DropDownFilter from "../../component/filter/DropDownFilter";
import Cards from "../../component/cards/Cards";
import Footer from "../../component/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../store/api/product";
import Pagenate from "../../component/Pagenate/Pagenate";
import ReactPaginate from "react-paginate";
import { addSearchValue } from "../../store/reducer/productSlice";
import Loder from "../../component/loder/Loder";

function Skin() {
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState({sort:null});
  const { products } = useSelector((state) => state.product);
  const { data: productsData, isLoading, error } = useGetAllProductsQuery(products);
  const [currentPage, setCurrentPage] = useState(1);
 

  const handleSort = (e) => {
    const selectedValue = e.target.name;
    setSortType({[e.target.name]:e.target.value});
  };

  const pageCount = Math.ceil(productsData?.results / 9);

  const paginate = ({ selected }) => {
       setCurrentPage(selected + 1);
  };

  useEffect(() => {
    if (sortType.sort !== null) {
      dispatch(addSearchValue({ page: currentPage, sort: sortType.sort }));
    }else {
      dispatch(addSearchValue({ page: currentPage}));
    }

  }, [currentPage,sortType]);

  useEffect(() => {
    if (products.page ===1) {
      setCurrentPage(1)
    } 
  }, [products.search]);


  // console.log(products)  
  // console.log("currentPage   "+currentPage)  

  //  console.log(productsData?.data)
  // localStorage.setItem("filtervalue", JSON.stringify(products));
if(isLoading)
 return <Loder/>

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
                items:
              </span>
              <div className="sortdiv inline-block w-fit h-fit float-right">
                <span className="text-base capitalize">sort by:</span>
                <select
                  name="sort"
                  onChange={handleSort}
                  id="sort"
                  value={sortType.sort || "alphaAZ"}
                  className="p-2 sort text-sm font-light capitalize rounded-sm ml-3 w-[200px]"
                >
                  <option value="alphaAZ">alphabetically, A-Z</option>
                  <option value="alphaZA">alphabetically, Z-A</option>
                  <option value="pricelow">price, low to hight</option>
                  <option value="pricehigh">price, high to low</option>
                </select>
              </div>
            </div>

            <div className="productsColumns">
              <Cards discount="all" column="Column" />
            </div>
            <div className="pageNumberPart w-fit mx-auto my-20 rounded-[50%] mx-0 ">
              <ReactPaginate
                breakLabel="of"
                onPageChange={paginate}
                pageCount={pageCount || 1}
                previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
                nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
                containerClassName={"pagination"}
                pageLinkClassName={
                  "page-number text-base capitalize font-medium mx-2 inline-block"
                }
                breakClassName={"inline-block"}
                breakLinkClassName={"inline-block mx-2"}
                pageClassName={"inline-block"}
                previousClassName={"inline-block"}
                nextClassName={"inline-block"}
                activeClassName={
                  "bg-bg-second  rounded-[50%] text-white-text mx-3"
                }
                activeLinkClassName={"mx-3 my-1"}
                previousLinkClassName={"page-number"}
                nextLinkClassName={"page-number"}
                pageRangeDisplayed={3}
                forcePage={products.page -1}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Skin;
