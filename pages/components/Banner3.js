import React from "react";
import Filter2 from "./Filter2";

const Banner3 = () => {
  return (
    <>
      {/*About Header Start*/}
      <div className="flex flex-col items-center m-4">
        <div
          className="w-full bg-white rounded overflow-x-hidden flex snap-x"
          style={{ height: "62vh" }}
        >
          <div
            className="snap-start w-full h-full flex items-center justify-center text-black text-4xl font-bold flex-shrink-0 bg-[#517b9d]"
            id="slide-1"
          >
            
            <div className="snap-start w-full h-full flex items-center justify-center text-black text-4xl font-bold flex-shrink-0">
            
              <Filter2 />
            </div>
          </div>
          <div
            className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-black relative"
            id="slide-6"
          >
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
              className="h-full w-full object-cover absolute inset-0 z-10 opacity-25"
            />
           
          </div>
        </div>
      </div>
      {/*About Header End*/}
    </>
  );
};

export default Banner3;
