import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className=" my-5 mx-2 box-border w-full sy">
        <h1 className="font-bold text-2xl font-sans px-5 py-4">Filters</h1>
        <div className="px-4 rounded-md">
          <select
            name="Price"
            value={"price"}
            aria-placeholder="Price"
            id=""
            className=" w-full bg-gray-100  px-2 rounded-md py-2"
          >
            <option value="200">Below 200</option>
            <option value="300">Below 300</option>
            <option value="800">Below 800</option>
            <option value="2000">Below 2000</option>
            <option value="5000">Below 5000</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
