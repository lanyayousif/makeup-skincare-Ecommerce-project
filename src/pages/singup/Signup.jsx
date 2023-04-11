import React from "react";
import "./signup.css";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import SecondaryButton from "../../component/button/SecondaryButton";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <>
      <main className="signup relative">
        <Navbar />
        <section className="se_signup mt-[7vh] pb-16 px-4">
          <h2 className="section_title text-purple-text mb-10">
            CREATE AN ACCOUNT
          </h2>
          <div className="formPart max-w-[460px] mx-auto h-full min-h-[40vh] mt-4">
            <form
              action="#"
              className="flex justify-center items-center flex-col"
            >
              <input
                type="text"
                className="inputDesign "
                placeholder="Username"
              />
              <input type="text" className="inputDesign " placeholder="Email" />
              <input
                type="text"
                className="inputDesign "
                placeholder="Password"
              />
              <input
                type="text"
                className="inputDesign "
                placeholder="re-enter password"
              />
              <SecondaryButton classBtn="mt-8">create account</SecondaryButton>
              <div className="block w-full mb-2">
                <p className="text-base text-center font-light text-lightBlack-text capitalize">
                  already have an account?
                </p>
              </div>
              <div className="block w-full mb-8">
                <NavLink to="/login">
                  <p className="text-base text-center font-normal text-purple-text capitalize hover:underline">
                    login
                  </p>
                </NavLink>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Signup;
