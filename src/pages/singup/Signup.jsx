import React, { useEffect, useState } from "react";
import "./signup.css";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import SecondaryButton from "../../component/button/SecondaryButton";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../store/api/auth";
import Errors from "../../component/errors/Errors";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/reducer/userSlice";

function Signup() {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const [errors, setErrors] = useState([]);
 const {user}=useSelector((state)=>state.user)

  const [signUp, { data: response, isError }] = useSignupMutation();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.confirmPassword !== formData.password) {
      setErrors([...errors, "passwords didn't match"]);
      return;
    }
    signUp(formData);
  };

  useEffect(() => {
    if (!isError && response) {
      console.log(response)
      localStorage.setItem("access_token", response?.data.token);
      dispatch(addUser(response.data.user))
    }
  }, [response]);

  if (user) {
    return <Navigate to="/account" replace/>
  }
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
              {errors.length > 0 && <Errors message={errors} />}
              <input
                type="text"
                className="inputDesign "
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleInput}
              />
              <input
                type="text"
                className="inputDesign "
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInput}
              />
              <input
                type="text"
                className="inputDesign "
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInput}
              />
              <input
                type="text"
                className="inputDesign "
                placeholder="re-enter password"
                name="confirmPassword"
                onChange={handleInput}
                value={formData.confirmPassword}
              />
              <div onClick={handleSubmit}>
                <SecondaryButton classBtn="mt-8">
                  create account
                </SecondaryButton>
              </div>
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
