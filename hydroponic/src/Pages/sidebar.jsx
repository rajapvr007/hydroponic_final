import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Newest Products</li>
            <li>Category 1</li>
            <li>Category 2</li>
          </ul>
        </div>
        <div className="sorting">
          <h3>Sort By</h3>
          <select>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
