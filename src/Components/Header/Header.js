import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
const Header = () => {
    const userData = useSelector((state) => state.userData);
    const navigate = useNavigate();
  
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="px-24 flex bg-gradient-to-b from-black absolute w-full z-10 justify-between items-center">
      <img
        className="w-48"
        alt="logo"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
      />
      <div className="flex items-center">
        {/* <div className="p-4">
          <select
            name="LanguageSelect"
            className="bg-transparent px-4 py-2 text-white border-solid border rounded-lg"
          >
            <option
              className="p-3"
              lang="en"
              label="English"
              value="en-IN"
              selected=""
            >
              English
            </option>
            <option
              className="text-white"
              lang="hi"
              label="हिन्दी"
              value="hi-IN"
            >
              हिन्दी
            </option>
          </select>
        </div> */}
        {!userData ? (
          <button
            onClick={() => {
              handleSignOut();
            }}
            className="bg-[#E50815] py-1 px-4 rounded-lg text-white"
          >
            Sign in
          </button>
        ) : (
          <div className="flex items-center">
            <button onClick={()=>{navigate('/Search')}} className="bg-[#E50815] py-2 rounded-md px-4 mx-4 text-white">Search Movies</button>
            <div className="relative inline-block group">
            <button className="p-0 border-none bg-transparent">
              <img
                src="https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                alt="user"
                className="w-10 h-10 object-cover"
              />
            </button>
            <div className="absolute hidden group-hover:block bg-[rgba(0,0,0,0.7)] min-w-[160px] shadow-lg z-10 right-0 top-full rounded-sm">
              <Link
                href="#home"
                className="block text-white text-sm py-4 px-2 hover:underline"
              >
                User
              </Link>
              <div className="bg-slate-500 w-full h-[1px]" />
              <button
                onClick={() => handleSignOut()}
                className="block text-white text-sm py-4 px-2 hover:underline"
              >
                Sign out of netflix
              </button>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
