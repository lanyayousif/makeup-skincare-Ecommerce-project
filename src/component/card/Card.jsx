import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar ,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import './card.css'
import heartimg from '../../assets/img/heart.svg'
import hearRed from '../../assets/img/hearRed.svg'
import product from '../../assets/img/product.jpg'
import { NavLink } from 'react-router-dom'
import Button from '../button/Button'

function Card() {

    const [heart,setHeart]=useState(false)
    const ratingNumber=4.5;
    const starIcon=[]
    const fullStart=Math.floor(ratingNumber)
    const halfStart=ratingNumber % 2 !== 0

       for (let i = 0; i < 5; i++) {
        if(i < fullStart){
            starIcon.push( <FontAwesomeIcon icon={faStar} className={ 'checked'}  />)
        }else if(halfStart){
            starIcon.push(<FontAwesomeIcon icon={faStarHalfAlt} className={ 'checked'}  />)
        }
        else{
            starIcon.push(<FontAwesomeIcon icon={faStar}  />)
        }
      }

  return (
    <div className='card m-8 w-[350px] h-[500px] rounded '>
            <div className="imgCard-part w-full h-[280px] relative" >
              <button className='absolute top-5 right-5' onMouseEnter={()=>setHeart(!heart)}  >
                  <img src={heart==true?hearRed:heartimg} alt="heart image" className='w-full h-full object-contain object-center' />   
              </button>
              <NavLink to="/skin">
                <img src={product} alt="product image"  className='w-full h-full rounded-t'/>
               </NavLink>
            </div>
        <div className="card_about h-[220px] py-6 px-4  bg-bg-bejiKal rounded-b">
                <div className="rating_part">
                    <div className="cardStars inline-block">
                         {starIcon}
                    </div>
                        
                    <span className='font-light text-sm ml-3 '>(245 reviews)</span>
                </div>
                <h6 className="h6 productName pt-2 ">KLAIRS</h6>
                <p className="productType text-base pt-1 pb-1 font-light">Freshly Juiced Vitamin C Drop</p>
                <h6 className="h6 price ">$24</h6>
                <div className='w-fit h-fit mx-auto my-4'><button>add to card</button></div>

          </div>
    </div>
  )
}

export default Card