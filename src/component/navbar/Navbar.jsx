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

function Navbar() {
  const [shownav, setShownav] = useState(false);
  const [scrollnav, setScrollnav] = useState(false);

  const handlShowNavbar = () => {
    setShownav(!shownav);
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
    <nav className={` ${scrollnav && `scrolled`}`}>
      <Container>
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
                        <NavLink to="/">
                          <FontAwesomeIcon icon={faBagShopping} />
                        </NavLink>
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
                hide={"hidden md:inline-block sm:inline-block xsm:inline-block"}
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
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FontAwesomeIcon icon={faHeart} />
                </NavLink>
              </li>
              <li className="lg:visible hidden lg:inline-block xl:inline-block 2xl:inline-block">
                <NavLink to="/login">
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FontAwesomeIcon icon={faBagShopping} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
