import React from 'react'
import { useGetAllProductsQuery } from '../../store/api/product';
import Card from "../card/Card";

function Search() {
    const { data: productsData, isLoading, error } = useGetAllProductsQuery();
   const handleButton=()=>{
    console.log("test")
   }
  return (
    <div className='search bg-white  z-50 min-h-[150px] h-fit py-2 px-10'>
        <input type="text"  className='searchInput inputDesign h-12 '/>

        <div className="productsReturn ">
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 grid-rows-1 w-full">
            {/* {productsData?.data.map((data) => {
              return <Card {...data} key={data._id} />;
            })} */}
          </div>
        </div>

        <button onClick={handleButton} className='mainButton block w-fit mx-auto'>shop all</button>
    </div>
  )
}

export default Search