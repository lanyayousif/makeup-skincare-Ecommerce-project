import React, { useEffect, useState } from 'react';
import { useGetAllProductsQuery } from '../../store/api/product';
import Card from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchValue } from '../../store/reducer/productSlice';
import { useNavigate } from 'react-router-dom';
import './search.css'
import { addsearchState } from '../../store/reducer/stateSlice';

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.product);
  const {
    data: productsData,
    isLoading,
    error,
  } = useGetAllProductsQuery(products);

  const [formData, setFormData] = useState({
    search: '',
  });
  const [btnState,setBtnState]=useState(true)
  const limitedArray = productsData?.data.slice(0, 4);

  // console.log(limitedArray)


  const handleInput = (e) => {
    if (e.target.name.includes('.')) {
      const [parent, child] = e.target.name.split('.');
      setFormData({
        ...formData,
        [parent]: { ...formData[parent], [child]: e.target.value },
        page:1
      });
    } else {
      if (e.target.name !== "page") {
        setFormData({ ...formData, [e.target.name]: e.target.value , page:1});
      }
      else{
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    }
  };

  const handleButton = () => {
    navigate('/skin');
    setBtnState(false)
  };

  useEffect(() => {
    dispatch(addsearchState({searchBtnState:btnState}));
  }, [btnState]);
  
  useEffect(() => {
    dispatch(addSearchValue(formData));
  }, [formData]);
  

  // console.log(products)

  // localStorage.setItem("searchInput", JSON.stringify(formData));

  return (
    <div className="search bg-white  z-50 min-h-[150px] h-fit py-2 px-10">
      <input
        type="text"
        name="search"
        placeholder="serch"
        className="searchInput inputDesign h-12 "
        onChange={handleInput}
        value={formData?.search}
      />

      <div className="productsReturn  overflow-y-auto h-[600px]">
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 grid-rows-1 w-full">
          {limitedArray?.map((data) => {
            return <Card {...data} key={data._id} />;
          })}
        </div>
      </div>

      <button onClick={handleButton} className="mainButton block w-fit mx-auto">
        shop all
      </button>
    </div>
  );
}

export default Search;
