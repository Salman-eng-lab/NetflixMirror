import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase/firebase";
import { checkValidations } from "../../utils/utils";
import Header from "../Header/Header";
const Login = () => {
  const userData = useSelector((state) => state.userData);
  const [isSignIn, setisSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const onLogin = () => {
    let isValid = checkValidations(email.current.value, password.current.value);
    if (!isValid) {
        if(isSignIn)
        {
            signInWithEmailAndPassword(auth,email.current.value, password.current.value)
              .then((userCredential) => {
                const user = userCredential.user;
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              });
        }else{
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
              )
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  console.log(user, "useruser");
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  toast.error(errorMessage);
                  // ..
                });
        }
      
    } else {
      toast.error(isValid);
    }
  };
  return (
    <div>
        <Header/>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
        alt="bgImage"
        className="w-full absolute h-full "
        aria-hidden="true"
      />
      <div className="bg-[rgba(0,0,0,0.5)] p-4 w-full absolute h-full ">
        <div className="w-3/12 mt-[200px] bg-[rgba(0,0,0,0.7)] b m-auto p-16 rounded-md">
          <span className="font-bold text-3xl text-white">
            {isSignIn ? "Sign In" : `Sign Up`}
          </span>
          <form className="mt-8">
            {!isSignIn && (
              <input
                ref={fullName}
                type="text"
                className="w-full bg-inherit border-solid border text-white border-[#606060] p-3 placeholder-[#606060] rounded-md mb-4"
                placeholder="please enter your full name"
              />
            )}
            <input
              ref={email}
              type="email"
              className="w-full bg-inherit border-solid border text-white border-[#606060] p-3 placeholder-[#606060] rounded-md mb-4"
              placeholder="please enter your email"
            />
            <input
              ref={password}
              type="password"
              className="w-full bg-inherit border-solid border text-white border-[#606060] p-3 placeholder-[#606060] rounded-md mb-4"
              placeholder="please enter your password"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                onLogin();
              }}
              className="bg-[#E50815] w-full py-2 rounded-md text-white"
            >
              {isSignIn ? `Sign In` : "Sign Up"}
            </button>
            <h4 className="text-white text-center my-5 text-[#B5B5B5] ">OR</h4>
            <button className="w-full bg-[#363636] py-2 rounded-md text-white">
              Use a sign-in code
            </button>
          </form>
          <h3 className="text-white text-center mt-4 cursor-pointer hover:underline hover:text-[#B5B5B5]">
            Forget password?
          </h3>
          <div className="flex items-center">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <label className="text-white ml-2 my-4">Remember me</label>
          </div>
          <div className="mb-10">
            <span
              className="text-white cursor-pointer"
              onClick={() => {
                setisSignIn(!isSignIn);
              }}
            >
              <span className="text-[#B5B5B5]">New to Netflix?</span>
              {isSignIn ? ` Sign In Now` : ` Sign up now.`}
            </span>
          </div>
          <span className="text-[#8C8C8C] font-thin text-sm ">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-[#0171EB]">Learn more.</span>
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
