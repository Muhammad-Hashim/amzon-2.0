import { Pirata_One } from "next/font/google";
import Image from "next/image";
import React from "react";

export default function PorductCard({
  title,
  price,
  description,
  image,
  rating,
}) {
  return (
    <div>
      <div className="border  border-gray-100 p-y-4  w-[400px] h-[601px]  shadow-md">
        <div className=" px-4 w-[400]    h-[300px">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="w-full h-[224px]  py-1 object-contain rounded-md"
          />
        </div>

        <div className="w-[400px]  h-[300px] mx-2 ">
          <h3 className="text-[16] w-[400px] font-medium h-[150] pb-1 font-sans ">
            {title}
          </h3>
          <p className="text-[14] w-[390px]  h-[100px]  pb-1 font-sans overflow-hidden  ">
            {description}
          </p>

          <div className="flex items-center ">
            <div className="text-yellow-400">
              {Array.from({ length: rating.rate }, (_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-4 h-4 mr-1 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0l1.12 6.47 6.06.88-4.39 4.29.97 6.02-6.66-3.51-6.66 3.51.97-6.02-4.39-4.29 6.06-.88L10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <span className="text-[#007185] ml-1">{rating.count} reviews</span>
          </div>
          <div className="text-black mb-2 h-[55px] gap-1 w-56 flex items-center  ">
            <b>$</b>
            <h1 className="font-semibold text-[28px]">{Math.floor(price)}</h1>
            <div className="self-start ">
              {(price % 1).toFixed(2).toString().replace(/^0\./, "")}
            </div>
          </div>
          <div class="mt-4  self-end  flex items-center space-x-4">
            <button class="px-[120px] py-2  self-end bg-gradient-to-b from-yellow-200 to-yellow-400   text-black rounded-md hover:bg-blue-600 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
