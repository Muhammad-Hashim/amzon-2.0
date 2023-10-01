"use client"

import React, { useEffect, useState, useRef } from 'react'
import data from "../../Db/data.json";
import Image from 'next/image';

export default function Banner() {
  
  const [image, setimage] = useState()
  const indexo0fimg = useRef(0)

  useEffect(() => {
       const interval = setInterval(() => {
        setimage(data.imageUrls[indexo0fimg.current]);
        indexo0fimg.current = (indexo0fimg.current + 1) % data.imageUrls.length;
       }, 2000);

       // Cleanup function to clear the interval when the component unmounts
       return () => clearInterval(interval);
  }, [])

  return (
    <div className="relative">
      <div className="absolute w-full bg-gradient-to-t h-32 from-gray-100  to-transparent  bottom-0 z-20" />
      <Image
        width={800}
        height={800}
        className="w-[1300px]  h-[600px] container  "
        src={image}
        alt=""
      />
    </div>
  );
}