import React, { useEffect, useState } from "react";
import { useUploadMultiMutation, useUploadProductMutation } from "../../store/api/upload.js";

function ProductAdd() {
  const [formData, setFormData] = useState({
ProductDiscountPrice :0,
ProductPrice :0,
productDescription: "",
productDetailse: "",
productIntegrate: "",
productName: "",
productSize: 0,
productTitle: "",
productType: "",
productUse: ""
})
  const [createProfile, profileResults] = useUploadProductMutation();
  const [upload,{data:uploadResponse}]=useUploadMultiMutation()

  const handleInput = (e) => {
    if (e.target.name.includes(".")) {
      const [parent, child] = e.target.name.split(".");
      setFormData({
        ...formData,
        [parent]: { ...formData[parent], [child]: e.target.value },
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleUpload = (e) => {
    upload(e.target.files)
    // console.log({[e.target.name]:e.target.files});
    // console.log(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProfile(formData);
  };

  useEffect(()=>{
    if(uploadResponse?.path){
      setFormData({...formData,image:uploadResponse.path})
    }
   else if(uploadResponse?.paths){
    setFormData({ ...formData, documents: uploadResponse.paths });
    }  
  },[uploadResponse])

  console.log(formData);
 

  return (
    <div className="py-10">
      <h1 className="section_title">Add product</h1>
      <form
        onSubmit={handleSubmit}
        className=" w-fit mx-auto my-6 max-w-[1050px]"
      >
        {/********************* product Name ******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="productName" className="h6">
            product Name :
          </label>
          <input
            type="text"
            className="productName inputDesign h-11 mt-3    "
            id="productName"
            name="productName"
            // required={true}
            onChange={handleInput}
            value={formData.productName}
          />
        </div>
        {/********************* product Title ******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="productTitle" className="h6">
            product Title :
          </label>
          <input
            type="text"
            className="productTitle inputDesign h-11 mt-3 "
            id="productTitle"
            name="productTitle"
            // required={true}
            onChange={handleInput}
            value={formData.productTitle}
          />
        </div>
        {/********************* product Description******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="productDescription" className="h6">
            product Description:
          </label>
          <input
            type="text"
            className="productDescription inputDesign h-11 mt-3 "
            id="productDescription"
            name="productDescription"
            // required={true}
            onChange={handleInput}
            value={formData.productDescription}
          />
        </div>
        {/********************* product Type******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="productType" className="h6">
            product Type:
          </label>
          <input
            type="text"
            className="productType inputDesign h-11 mt-3 "
            id="productType"
            name="productType"
            // required={true}
            onChange={handleInput}
            value={formData.productType}
          />
        </div>
        {/********************* product Size******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="productSize" className="h6">
            product Size:
          </label>
          <input
            type="number"
            className="productSize inputDesign h-11 mt-3 "
            id="productSize"
            name="productSize"
            // required={true}
            onChange={handleInput}
            value={formData.productSize}
          />
        </div>
        {/*********************Product Price******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="ProductPrice" className="h6">
            Product Price:
          </label>
          <input
            type="number"
            className="ProductPrice inputDesign h-11 mt-3 "
            id="ProductPrice"
            name="ProductPrice"
            // required={true}
            onChange={handleInput}
            value={formData.ProductPrice}
          />
        </div>
        {/*********************Product DiscountPrice******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="ProductDiscountPrice" className="h6">
            Product Discount Price:
          </label>
          <input
            type="number"
            className="ProductDiscountPrice inputDesign h-11 mt-3 "
            id="ProductDiscountPrice"
            name="ProductDiscountPrice"
            // required={true}
            onChange={handleInput}
            value={formData.ProductDiscountPrice}
          />
        </div>
        {/*********************productImgcard******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="productImgcard" className="h6">
            product image card:
          </label>
          <input
            type="file"
            className="productImgcard inputDesign h-11 mt-3 "
            id="productImgcard"
            name="productImgcard"
            // required={true}
            accept="image/*"
            multiple={true}
            onChange={handleUpload}
            // value={formData.productImgcard}
          />
        </div>
        {/*********************productImgcardHover******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="productImgcardHover" className="h6">
            product image card hover:
          </label>
          <input
            type="file"
            className="productImgcardHover inputDesign h-11 mt-3 "
            id="productImgcardHover"
            name="productImgcardHover"
            // required={true}
            accept="image/*"
            multiple={true}
            onChange={handleUpload}
            // value={formData.productImgcardHover}
          />
        </div>
        {/*********************productImgPage******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="productImgPage" className="h6">
            product image page:
          </label>
          <input
            type="file"
            className="productImgPage inputDesign h-11 mt-3 "
            id="productImgPage"
            name="productImgPage"
            accept="image/*"
            multiple={true}
            onChange={handleUpload}
            // value={formData.productImgPage}
          />
        </div>
        {/*********************productImgFree******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="productImgFree" className="h6">
            product image free:
          </label>
          <input
            type="file"
            className="productImgFree inputDesign h-11 mt-3 "
            id="productImgFree"
            name="productImgFree"
            // required={true}
            accept="image/*"
            multiple={true}
            onChange={handleUpload}
            // value={formData.productImgFree}
          />
        </div>
        {/*********************productDetailse******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="productDetailse" className="h6">
            product Detailse:
          </label>
          <input
            type="text"
            className="productDetailse inputDesign h-11 mt-3 "
            id="productDetailse"
            name="productDetailse"
            // required={true}
            onChange={handleInput}
            value={formData.productDetailse}
          />
        </div>
        {/*********************productIntegrate******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="productIntegrate" className="h6">
            product Integrate:
          </label>
          <input
            type="text"
            className="productIntegrate inputDesign h-11 mt-3 "
            id="productIntegrate"
            name="productIntegrate"
            // required={true}
            onChange={handleInput}
            value={formData.productIntegrate}
          />
        </div>
        {/*********************productUse******************** */}
        <div className="inline-block max-w-[500px] w-full ml-6">
          <label htmlFor="productUse" className="h6">
            product Use:
          </label>
          <input
            type="text"
            className="productUse inputDesign h-11 mt-3 "
            id="productUse"
            name="productUse"
            // required={true}
            onChange={handleInput}
            value={formData.productUse}
          />
        </div>

        <button type="submit" className="mainButton block mx-auto w-fit" >
          Add product
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;
