import React, { useEffect, useState } from "react";
import "./filter.css";

function Filter() {
  const [filterGroupdata,setFilterGroupdata] = useState([
      {
          id: 1,
          productid: "oil22",
          name: "Oil Cleanser",
          catagory: "ProductType",
        },
        {
      id: 2,
      productid: "Water22",
      name: "Water Cleanser",
      catagory: "ProductType",
    },
    { id: 3, productid: "Toner22", name: "Toner", catagory: "ProductType" },
    { id: 4, productid: "Essence22", name: "Essence", catagory: "ProductType" },
    {
      id: 5,
      productid: "Serum22",
      name: "Serum/Ampoule",
      catagory: "ProductType",
    },
    {
      id: 6,
      productid: "Moisturizer22",
      name: "Moisturizer",
      catagory: "ProductType",
    },
    { id: 7, productid: "Eye22", name: "Eye Creams", catagory: "ProductType" },
    
    { id: 8, productid: "oilskin22", name: "oil", catagory: "SkinType" },
    { id: 9, productid: "normal22", name: "normal", catagory: "SkinType" },
    { id: 10, productid: "dry22", name: "dry", catagory: "SkinType" },
    {
        id: 11,
        productid: "Combination22",
        name: "Combination",
        catagory: "SkinType",
    },
    
    { id: 12, productid: "Acids22", name: "Acids", catagory: "IngredientType" },
    {
        id: 13,
        productid: "Anti22",
        name: "Anti-Oxidant /Vitamins",
        catagory: "IngredientType",
    },
    {
        id: 14,
        productid: "Ferments22",
        name: "Ferments",
        catagory: "IngredientType",
    },
    { id: 15, productid: "Snail22", name: "Snail", catagory: "IngredientType" },
    {
        id: 16,
        productid: "Vitamins22",
        name: "Vitamins",
        catagory: "IngredientType",
    },
    
    { id: 17, productid: "$1022", name: "$10 - $20", catagory: "Price" },
    { id: 18, productid: "$2022", name: "$20 - $30", catagory: "Price" },
    { id: 19, productid: "$3022", name: "$30 - $40", catagory: "Price" },
    { id: 20, productid: "$4022", name: "$40 - $50", catagory: "Price" },
    { id: 21, productid: "$5022", name: "$40 - $60", catagory: "Price" },
    { id: 22, productid: "$6022", name: "$60 - $70", catagory: "Price" },
    { id: 23, productid: "$7022", name: "$70 - more", catagory: "Price" },
]);

  const [checkedData, setCheckedData] = useState();



  const handleCheckedChange = (e) => {
    if (e.target.checked) {
      setCheckedData({ ...checkedData, [e.target.name]: e.target.value });
    }
  };

  useEffect(()=>{
    if(checkedData){
        console.log(checkedData) }
  },[checkedData])

  const uniqueCategories = [
    ...new Set(filterGroupdata.map((item) => item.catagory)),
  ];

  return (
    <div className="filter w-fit h-fit md:w-full xsm:w-full sm:w-full">
      <p className="text-sm font-light text-black-text capitalize">Filter by</p>
      <div className="filterListsPart">
        <form>
        {uniqueCategories.map((category) => (
    <div key={category} className="catagoryFilter pb-2 ">
      <h6 className="h6 my-2">{category}</h6>
      {filterGroupdata.filter((item) => item.catagory === category)
        .map((item) => (
            <div key={item.id} className="mb-2 ml-8">
              <input
                type="checkbox"
                name={item.productid}
                onChange={handleCheckedChange}
                id={item.productid}
                value={item.name}
              />
              <label htmlFor={item.productid} className="text-base font-light ml-2 capitalize">{item.name}</label>
            </div>
          )
        )
        
        }
    </div>
  ))}
        </form>
      </div>
    </div>
  );
}

export default Filter;

//   for (let key in filterGroupdata) {
//     console.log(key + ': ' + filterGroupdata[key][i]);
//   }


