import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// import
import "./footer.css";
import Logo from "../logo/Logo";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";

function Footer() {
  return (
    <footer className="se_footer  w-full h-fit mt-16  bg-bg-bejiKal relative mb-[-10px]">
      <div className="partOne py-10 px-8 lg:px-4 xsm:px-4">
        <Logo />
        <div
          className="listsPart  columns-3xs
             grid  
              sm:grid-rows-2 xsm:grid-rows-[repeat(2, minmax(200px, 250px))]  md:grid-rows-2 2xl:grid-rows-1 xl:grid-rows-1 
              lg:grid-rows-1
              sm:grid-cols-3 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6"
        >
          <ul
            className="lists mt-4  col-start-1 col-end-2 md:col-start-1 md:col-end-2 md:row-span-1 
            sm:col-start-1 sm:col-end-2 sm:row-span-1 xsm:col-start-1 xsm:col-end-2  xsm:row-start-1 xsm:row-end-2 "
          >
            <li className="list">
              <h6 className="h6 capitalize">Featured</h6>
            </li>
            <NavLink to="/">
              <li className="list text-sm capitalize my-3 footerListHover ">
                skin care store
              </li>
            </NavLink>
            <NavLink to="/">
              {" "}
              <li className="list text-sm capitalize my-3 footerListHover ">
                hair care store
              </li>
            </NavLink>
            <NavLink to="/">
              {" "}
              <li className="list text-sm capitalize my-3 footerListHover ">
                body care store
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="list text-sm capitalize my-3 footerListHover ">
                make up store
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="list text-sm capitalize my-3 footerListHover ">
                best sellers store
              </li>
            </NavLink>
          </ul>
          <ul
            className="lists mt-4  col-start-2 col-end-3 md:col-start-2 md:col-end-3 md:row-span-1
          sm:col-start-2 sm:col-end-3 sm:row-span-1 xsm:col-start-2 xsm:col-end-3 xsm:row-start-1 xsm:row-end-2"
          >
            <li className="list">
              <h6 className="h6 capitalize">shop</h6>
            </li>
            <NavLink to="/">
              <li className="list text-sm capitalize my-3 footerListHover">
                nail care
              </li>
            </NavLink>
            <NavLink to="/">
              {" "}
              <li className="list text-sm capitalize my-3 footerListHover">
                lips
              </li>
            </NavLink>
            <NavLink to="/">
              {" "}
              <li className="list text-sm capitalize my-3 footerListHover">
                eyes
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="list text-sm capitalize my-3 footerListHover">
                body scrub
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="list text-sm capitalize my-3 footerListHover">
                moisturizing cream
              </li>
            </NavLink>
          </ul>
          <ul
            className="lists mt-4  col-start-3 col-end-4 md:col-start-3 md:col-end-4 md:row-span-1
          sm:col-start-3 sm:col-end-4 sm:row-span-1 xsm:col-start-1 xsm:col-end-3 xsm:row-start-2 xsm:row-end-3 "
          >
            <li className="list">
              <h6 className="h6 capitalize">need some help?</h6>
            </li>
            <NavLink to="/">
              <li className="list text-sm capitalize my-3 footerListHover">
                about us
              </li>
            </NavLink>
            <NavLink to="/">
              {" "}
              <li className="list text-sm capitalize my-3 footerListHover">
                Contact us
              </li>
            </NavLink>
            <NavLink to="/">
              {" "}
              <li className="list text-sm capitalize my-3 footerListHover">
                FAQs
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="list text-sm capitalize my-3 footerListHover">
                privacy policy
              </li>
            </NavLink>
          </ul>

          <div
            className="lists mt-4 col-start-4 col-end-8 md:col-start-1 md:col-end-4 md:row-span-2
          sm:col-start-1 sm:col-end-4 sm:row-span-2 xsm:col-start-1 xsm:col-end-3 xsm:row-start-3 xsm:row-end-4"
          >
            <div className="content_footer mx-auto  max-w-[580px]">
              <h6 className="h6 capitalize mb-6 xsm:text-sm xsm:mb-2">
                sign up for subscriber-only discounts
              </h6>
              <div className="subscribeInput grid grid-cols-3 grid-rows-1 grid-rows-[repeat(1, minmax(30px, 50px))]">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="inline-block  w-full  lg:w-[340px] max-w-[400px]  px-4 py-3 rounded col-start-1 col-end-3"
                />
                <Button classbtn="px-4 py-3 xsm:py-3 xsm:text-sm font-semibold col-start-3 col-end-4 my-0 xsm:my-0 xsm:mx-2">submit</Button>
              </div>
              <div className="social_Icons my-8">
                <a href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partTwo bg-bg-main h-fit py-1">
        <p className="text-sm font-normal text-center capitalize">
          <span className=" text-base">@</span>2023 devloped by me
        </p>
      </div>
    </footer>
  );
}

export default Footer;
