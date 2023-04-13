import React from 'react'
import "./ReviewsForm.css"
import Button from '../button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan,faLessThan } from '@fortawesome/free-solid-svg-icons'

function ReviewsForm() {
  return (
    <div className='reviewform max-w-[800px] mx-auto w-full py-8'>
        <form action="#">
<div className="h-full">
            {/* title */}
            <label htmlFor="title" className='labelInput text-base font-normal capitalize block mt-4'> title:</label>
            <input type="text"  id='title' className='reviewInput block w-[90%] xsm:w-[100%]  w-full bg-transparent h-10 rounded px-4 my-2' />
            
            {/* review */}
            <label htmlFor="review" className='labelInput text-base font-normal capitalize block mt-6'>review:</label>
            <textarea id='review' className='reviewInput block w-[90%] xsm:w-[100%]  w-full bg-transparent h-10 rounded px-4 my-2 max-h-[200px]' cols="10" rows="4" maxlength="200" />
            
            {/* Skin Type */}
            <label htmlFor="skinType" className='labelInput text-base font-normal capitalize block mt-6'>skin Type:</label>
            <select name="skinType" id="skinType"  className='reviewInput block w-[90%] xsm:w-[100%]  w-full bg-transparent h-10 rounded px-4 my-2'>
                    <option value="Oily">Oily</option>
                    <option value="dry">dry</option>
                    <option value="Normal">Normal</option>
                    <option value=" Combination"> Combination</option>
                    <option value=" Sensitive">  Sensitive</option>
                </select>
    
            {/* Skin shade */}
            <label htmlFor="skinTone" className='labelInput text-base font-normal capitalize block mt-6'>skin Tone:</label>
            <select name="skinTone" id="skinTone"  className='reviewInput block w-[90%] xsm:w-[100%]  w-full bg-transparent h-10 rounded px-4 my-2'>
                    <option value="Light">Light </option>
                    <option value="Medium"> Medium</option>
                    <option value="Deep">Deep</option>
                    <option value="Rich">Rich</option>
                </select>
            {/*age */}
            <label htmlFor="age" className='labelInput text-base font-normal capitalize block mt-6'>age:</label>
            <select name="age" id="age"  className='reviewInput block w-[90%] xsm:w-[100%]  w-full bg-transparent h-10 rounded px-4 my-2'>
                    <option value="18">smoll than 18 </option>
                    <option value="18-24"> 18-24</option>
                    <option value="25-35">25-35</option>
                    <option value="45-55"> 45-55</option>
                    <option value="55+">  55+</option>
                    <option value="55"> grater than 55</option>
                </select>
 
        
            <div className="usernameEmail grid grid-cols-2 xsm:grid-cols-1 mt-6">
           <div className="usernamePart col-span-1">
                    {/* username */}
                    <label htmlFor="username" className='labelInput text-basecapitalize font-normal '>Enter your username:</label>
            <input type="text"  id='username' className='reviewInput block w-full xsm:w-[100%] max-w-[390px]  bg-transparent h-10 rounded px-4 my-2' />
            
           </div>
           <div className="emailpart col-span-1">
             {/* email */}
             <label htmlFor="email" className='labelInput text-base capitalize font-normal '>Enter your Email:</label>
            <input type="email" id='email' className='reviewInput block w-full xsm:w-[100%] max-w-[390px]  bg-transparent h-10 rounded px-4 my-2' />
            
           </div>
            </div>

            <div className="w-fit mx-auto mt-9 pt-8"><Button classbtn="min-w-[150px]">Post</Button></div>
            </div>
        </form>
    </div>
  )
}

export default ReviewsForm