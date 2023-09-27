
import React from "react";
import './Bannar.css'; 

const Bannar = () => {
  return (
    <div className="relative h-[70vh]  ">
      <div className="absolute top-0 left-0 w-full h-full bg-overlay-image opacity-10"></div>
      <div className="relative top-28 ">
        <h1 className="text-center flex justify-center  text-5xl font-bold">I Grow By Helping People In Need</h1>
         
            <div class=" text-center relative flex justify-center h-10 m-auto mt-10 ">
            <input
                type="email"
                class="w-[320px] rounded-l-lg  pl-2"
                placeholder=" Search here...."
               
            />
            <button
                class=" bg-[#FF444A] px-4 text-white rounded-r-lg"
                type="button">Search</button>
            
            </div>
      </div>
    </div>
  );
};

export default Bannar;
