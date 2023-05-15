import React, { useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addUser,logoutt } from "../../store/reducer/userSlice";
import { Navigate } from "react-router-dom";


function Account() {
    const dispatch=useDispatch()
    const [logout,setLogout]=useState("false")
    const token = localStorage.getItem("access_token");
    const {user}=useSelector((state)=> state.user)

    console.log(user)
    const handlButton=(e) => {
      // localStorage.removeItem("access_token");
      // dispatch(addUser(null));
      setLogout("true")
      dispatch(logoutt());
    }

    // console.log(token)
    // console.log(logout)
    
    if((token === null || token === "undefined") && logout=== "true") return <Navigate to="/" replace/>
  return (
    <>
    <main className="login relative">
      <Navbar />
      <section className="se_login mt-[7vh] pb-16 px-4">
        <button
          className="main-btn xsm:px-4 px-8 py-4 w-fit
         bg-bg-second uppercase text-base font-bold m-4 rounded text-white-text"
          onClick={handlButton}
        >
          logout
        </button>
      </section>
    </main>
    <Footer />
  </>
  )
}

export default Account
