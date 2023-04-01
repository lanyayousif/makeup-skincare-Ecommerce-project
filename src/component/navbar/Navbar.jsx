import React,{useEffect,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import Container from '../container/Container'
import { NavLink } from 'react-router-dom'
import Logo from '../logo/Logo'
import './navbar.css'
import Button from '../button/Button';

function Navbar() {
    const [shownav,setShownav]=useState(false)
    const [scrollnav,setScrollnav]=useState(false)

    const handlShowNavbar=()=>{
        setShownav(!shownav)
    }

    const changeBackground = (event) => {
        if(window.scrollY>30){
           setScrollnav(true) }
       else{
        setScrollnav(false) 
        }
    }

    useEffect(()=>{
        changeBackground()
        window.addEventListener("scroll", changeBackground)
     })


  return (
    <nav className={` ${scrollnav && `scrolled`}`}>
        <Container>
            <div className="nav-parts flex justify-between items-center">

                <div className="logo-part ">
                    <Logo/>
                </div>

                <div className="humberger-btn w-8 h-8  hidden md:inline-block sm:inline-block xsm:inline-block inline-block order-first" onClick={handlShowNavbar} >
                   <span><FontAwesomeIcon className='text-2xl' icon={faBars} /></span>
                </div>

                <div className={`nav_elements ${shownav && 'active'} `}>
                    <ul className='flex justify-between items-baseline lg-flex-row sm-flex-col list-none'>
                        <li><NavLink to="/">Bestseller</NavLink></li>
                        <li><NavLink to="/skin">Skin</NavLink></li>
                        <li><NavLink to="/body">Body</NavLink></li>
                        <li><NavLink to="/sun">Sun</NavLink></li>
                        <li><NavLink to="/makeup">Makeup</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    <Button hide={"hidden md:inline-block sm:inline-block xsm:inline-block"} >account</Button>
                    </ul>
                </div>

                <div className="icons sm:order-last md:order-last xsm:order-last">
                    <ul className='flex justify-between items-center'>
                        <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                        <li><FontAwesomeIcon icon={faHeart} /></li>
                        <li className='lg:visible hidden lg:inline-block'><FontAwesomeIcon icon={faUser} /></li>
                        <li><FontAwesomeIcon icon={faBagShopping} /></li>
                    </ul>
                </div>

            </div>
        </Container>
    </nav>
  )
}

export default Navbar

