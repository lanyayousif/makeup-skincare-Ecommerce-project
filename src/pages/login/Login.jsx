import React, { useEffect, useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import "./login.css";
import SecondaryButton from "../../component/button/SecondaryButton";
import { NavLink, Navigate } from "react-router-dom";
import { useGetCurrentUserQuery, useLoginMutation } from "../../store/api/auth";
import { addUser } from "../../store/reducer/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email:"",
    password:""
  });
  const [token, setToken] = useState();
  const { user } = useSelector((state) => state.user);
  // const { data: userData, isError: userDataIsError } = useGetCurrentUserQuery(
  //   token,
  //   { skip: !token }
  // );
  // const { data: userData, isError: userDataIsError } = useGetCurrentUserQuery(token);
  const [login, { data, isError }] = useLoginMutation();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };
  
  useEffect(() => {
    if (!isError && data) {
      localStorage.setItem("access_token", data?.token);
      setToken(data?.token)
      dispatch(addUser(data?.user));
    }
  }, [data]);

  // useEffect(() => {
  //   if (!userDataIsError && userData) {
  //     dispatch(addUser(userData.data));
  //   }
  // }, [userData]);
  
  // console.log(userData?.data)
  // console.log(user)
  if (user) return <Navigate to="/account" replace />;
 return (
    <>
      <main className="login relative">
        <Navbar />
        <section className="se_login mt-[7vh] pb-16 px-4">
          <h2 className="section_title text-purple-text mb-5">login</h2>
          <p className="text-base text-center">
            Please enter your e-mail and password:
          </p>
          <div className="formPart max-w-[460px] mx-auto h-full min-h-[40vh] mt-4">
            <form
              action="#"
              className="flex justify-center items-center flex-col"
            >
              <input
                type="text"
                className="inputDesign "
                placeholder="Email"
                onChange={handleInput}
                name="email"
                value={formData.email}
              />
              <input
                type="text"
                className="inputDesign mb-3"
                placeholder="Password"
                onChange={handleInput}
                name="password"
                value={formData.password}
              />
              <div className="block w-full mb-8">
                <NavLink to="/">
                  <p className="text-base text-right font-light text-lightBlack-text capitalize">
                    Forgot Password?
                  </p>
                </NavLink>
              </div>
              <div onClick={handleSubmit}>
                <SecondaryButton>sign in</SecondaryButton>
              </div>

              <div className="block w-full mb-2">
                <p className="text-base text-center font-light text-lightBlack-text capitalize">
                  don't have an account yet?
                </p>
              </div>
              <div className="block w-full mb-8">
                <NavLink to="/signup">
                  <p className="text-base text-center font-normal text-purple-text capitalize hover:underline">
                    create Account
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

export default Login;
