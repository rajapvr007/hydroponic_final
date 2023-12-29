import React from "react";
import boxDetails from "./boxDetails";

export default function Box() {
  return (
    <div className="mx-2 grid lg:flex-row lg:grid-cols-2 md:grid-col sm:grid-col ">
      {boxDetails.map((i) => {
        return (
          <div className="flex flex-row mx-3 mt-3 ">
            <div class="w-full  mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 ">
              <div class="w-full  flex mb-4 items-center" >
                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src={i.img} alt="" />
                </div>
                <div class="flex-grow pl-3">
                  <h6 class="font-bold text-sm uppercase text-gray-600">
                    {i.title}
                  </h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  {i.desc}
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
          
    </div>
  );
}
// flex md:flex-col lg:flex-row grid grid sm:flex-col-1