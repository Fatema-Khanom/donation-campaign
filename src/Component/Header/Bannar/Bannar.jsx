
import React from "react";
import './Bannar.css'; 

const Bannar = () => {
  return (
    <div className="relative h-[90vh] -mt-20">
      <div className="absolute top-0 left-0 w-full h-full bg-overlay-image opacity-50"></div>
      {/* Your content goes here */}
    </div>
  );
};

export default Bannar;
