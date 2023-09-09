import { Pirata_One } from 'next/font/google';
import React from 'react'

export default function PorductCard({ title, price, description, image, rating }) {
 
  
    return (
      <div>
        <div className="border border-gray-300 p-y-4  w-[242px] h-[501px] rounded-lg shadow-md">
          <div className=" px-4 w-[242px]   h-[224px] bg-grays">
            <img
              src={image}
              alt={title}
              className="w-full h-[224px] py-1 object-contain rounded-md"
            />
          </div>

          <div className="w-[242px]  h-[224px] mx-2">
            <h3 className="text-[16] w-[242px] h-[150] pb-1 font-sans ">{title}</h3>

            <div className="flex items-center">
              <div className="text-yellow-400">
                {Array.from({ length: rating.rate }, (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-[#007185] ml-1">
                {rating.count} reviews
              </span>
            </div>
            <div className="text-black mb-2 h-[55px] gap-1 w-56 flex items-center  ">
              <b>$</b>
              <h1 className="font-semibold text-[28px]">{Math.floor(price)}</h1>
              <div className="self-start ">
                {(price % 1).toFixed(2).toString().replace(/^0\./, "")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
