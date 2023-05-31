import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Container from "../container/Container";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import "./navbar.css";
import Button from "../button/Button";
import Cart from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import Search from "../search/Search";

function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [shownav, setShownav] = useState(false);
  const [showcart, setShowcart] = useState(false);
  const [scrollnav, setScrollnav] = useState(false);
  const [search, setSearch] = useState(false);

  const handlShowNavbar = () => {
    setShownav(!shownav);
  };
  const handlShowCart = () => {
    setShowcart(!showcart);
  };
  const handlShowSearch = () => {
    setSearch(!search);
  };

  const changeBackground = (event) => {
    if (window.scrollY > 30) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <nav className={`${scrollnav && `scrolled`} hover:bg-[var(--back-weight-color)] ${search && "bg-[var(--back-weight-color)]" } `}>
        <Container>
          <div className={`cartshow ${showcart && "activecart"} `}>
            <div className="relative">
              <button
                className=" top-5 right-7  absolute  block z-[4444444444444444444]"
                onClick={handlShowCart}
              >
                <FontAwesomeIcon className="text-2xl" icon={faXmark} />
              </button>
            </div>
            <Cart />
            <div className="blackshadow" onClick={handlShowCart}></div>
          </div>

          <div className="nav-parts flex justify-between items-center">
            <div className="logo-part ">
              <Logo />
            </div>

            <div
              className="humberger-btn w-8 h-8  hidden md:inline-block sm:inline-block xsm:inline-block inline-block order-first"
              onClick={handlShowNavbar}
            >
              <span>
                <FontAwesomeIcon className="text-2xl" icon={faBars} />
              </span>
            </div>

            {/* nav menu responsive */}
            <div className={`nav_elements ${shownav && "active"} `}>
              {/* nav menu top  */}
              <div
                className="  md:container xsm:container sm:container mx-auto xsm:px-4 xsm:py-[10px] sm:px-4 sm:py-[10px]
             md:px-8 md:py-5 "
              >
                {/* pt-5 px-5  */}
                <div className="close_menu_part  hidden md:block sm:block xsm:block ">
                  <div className="flex justify-between items-center ">
                    <div
                      className="humberger-btn w-8 h-8  hidden 
                    md:inline-block sm:inline-block xsm:inline-block  order-first"
                      onClick={handlShowNavbar}
                    >
                      <span>
                        <FontAwesomeIcon className="text-2xl" icon={faXmark} />
                      </span>
                    </div>
                    <div className="logo-part ">
                      <Logo />
                    </div>
                    <div className="icons sm:order-last md:order-last xsm:order-last">
                      <ul className="flex justify-between items-center">
                        <li>
                          <NavLink to="/">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/">
                            <FontAwesomeIcon icon={faHeart} />
                          </NavLink>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faBagShopping} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* nav items */}
              <ul className="nav-items flex justify-between items-baseline lg-flex-row sm-flex-col list-none">
                <li>
                  <NavLink to="/">Bestseller</NavLink>
                </li>
                <li>
                  <NavLink to="/skin">Skin</NavLink>
                </li>
                <li>
                  <NavLink to="/body">Body</NavLink>
                </li>
                <li>
                  <NavLink to="/sun">Sun</NavLink>
                </li>
                <li>
                  <NavLink to="/makeup">Makeup</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <Button
                  hide={
                    "hidden md:inline-block sm:inline-block xsm:inline-block"
                  }
                >
                  account
                </Button>
              </ul>
            </div>
            {/* nav icons */}
            <div className="icons sm:order-last md:order-last xsm:order-last">
              <ul className="flex justify-between items-center">
                <li>
                  <NavLink to="/">
                   <button onClick={handlShowSearch} > <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FontAwesomeIcon icon={faHeart} />
                  </NavLink>
                </li>
                <li className="lg:visible hidden lg:inline-block xl:inline-block 2xl:inline-block">
                  {user ? (
                    <NavLink to="/account">
                      <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                  ) : (
                    <NavLink to="/login">
                      <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                  )}
                </li>
                <li onClick={handlShowCart}>
                  <FontAwesomeIcon icon={faBagShopping} />
                </li>
              </ul>
            </div>
          </div>
        </Container>
          <div className={`searchNav ${search && "activeSearch"} `}>
          <Search/>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
