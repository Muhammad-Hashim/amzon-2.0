import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <nav className="bg-amazon_blue  bg-[#131921] py-2">
        <div className="container flex items-center justify-between mx-auto">
          {/* Amazon Logo */}
          <Image
            width={400}
            height={400}
            src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
            alt="Amazon Logo "
            className="w-24 mt-3 mr-3"
          />

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="w-2/3 px-2 py-1 rounded-l-lg focus:outline-none"
          />
          <button className="px-4 py-1 text-black bg-yellow-400 rounded-r-lg hover:bg-yellow-500 focus:outline-none">
            Search
          </button>

          {/* Navigation Links */}
          <div className="flex items-center space-x-3 text-white">
            <div className="group">
              <p className="ml-3 hover:underline">
                Hello, <b>Sign in</b>{" "}
              </p>
              <div className="absolute hidden p-4 space-y-2 text-black bg-white group-hover:block w-36">
                {/* Sign-In Content */}
                {/* Add your sign-in/sign-out logic here */}
                <p>Your account</p>
                <p>Your Orders</p>
                <p>Sign Out</p>
              </div>
            </div>
            <div>
              <p>Returns</p>
              <b>&Orders</b>
            </div>

            <div className="relative group">
              <p>Your</p>
              <p className="flex items-center hover:underline">
                Prime
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-1 text-yellow-300 group-hover:text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.293 3.293A1 1 0 012 3h16a1 1 0 01.707 1.707l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 01-.293-.707z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
              <div className="absolute hidden p-4 space-y-2 text-black bg-white group-hover:block w-36">
                {/* Prime Content */}
                {/* Add your Prime-related content here */}
                <p>Prime Membership</p>
                <p>Prime Video</p>
                <p>Prime Music</p>
                <p>Prime Reading</p>
              </div>
            </div>
            <p className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 100 100"
              >
                <path d="M78.8,28.6c-2.8-9.4-11.6-16-21.9-16H43.1c-10.3,0-19.1,6.6-21.9,16H11c-2.2,0-4,1.8-4,4v3.9c0,2.2,1.8,4,4,4h2.9l7.2,45.2c0.6,4.1,4.2,7.3,8.3,7.3h48.6c4.1,0,7.7-3.2,8.3-7.3l7.2-45.2H89c2.2,0,4-1.8,4-4v-3.9C93,30.3,81.6,21.8,78.8,28.6z M45.2,13c0.8-2.8,3.4-5,6.7-5s5.9,2.2,6.7,5H45.2z M81.2,74.8c-0.2,1.5-1.5,2.5-3,2.5H28.9c-1.5,0-2.8-1-3-2.5L18.7,29h62.7L81.2,74.8z M83.6,27H16.4l-5.6,35.1c-0.1,0.8,0.2,1.7,0.7,2.4c0.4,0.7,1.1,1.1,1.9,1.1h58.7c0.8,0,1.5-0.4,1.9-1.1c0.4-0.7,0.7-1.6,0.7-2.4L83.6,27z" />

                <path d="M69.7,52.2c-0.8,0-1.5,0.4-1.9,1.1c-0.4,0.7-0.7,1.6-0.7,2.4l-7.2,45.2H34.3l-7.2-45.2c0-0.1-0.1-0.2-0.2-0.3c-0.2-0.2-0.3-0.5-0.2-0.7c0-0.3,0.2-0.5,0.5-0.7l7.6-4.5c0.1-0.1,0.2-0.2,0.3-0.2c0.2-0.2,0.5-0.3,0.7-0.2c0.3,0,0.5,0.2,0.7,0.5l2.4,3.5c0.1,0.2,0.2,0.3,0.2,0.5c0,0.3-0.2,0.5-0.5,0.7l-4.2,2.5h5.6c4.1,0,7.7-3.2,8.3-7.3l7.2-45.2H89c0.3,0,0.6,0.2,0.7,0.5c0.1,0.3,0,0.6-0.2,0.7c-0.1,0.1-0.2,0.2-0.3,0.2c-0.2,0.1-0.4,0.1-0.6,0.1H80L75.1,52l4.6-2.7C80.1,49.3,80.1,48.5,79.3,47.9C78.7,47.3,77.7,47,77,47H26c-0.7,0-1.7,0.3-2.3,0.9c-0.6,0.6-1,1.6-1,2.4L22.1,52H10.5c-1.5,0-2.8-1-3-2.5L0.7,27c-0.1-0.8,0.2-1.7,0.7-2.4c0.4-0.7,1.1-1.1,1.9-1.1H89c0.8,0,1.5,0.4,1.9,1.1c0.4,0.7,0.7,1.6,0.7,2.4l-5.6,35.1c-0.1,0.8-0.2,1.7-0.7,2.4C84.4,74.2,83.1,75.2,81.6,75.2z" />
              </svg>
              Cart
            </p>
          </div>
        </div>
      </nav>
      <Navbar />
    </>
  );
};

export default Header;
