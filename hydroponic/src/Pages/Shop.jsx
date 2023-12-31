import React from "react";
import ProductCard from "./productcard";
import Sidebar from "./sidebar";
import Footer from "./footer";

const Shop = () => {
  return (
    <div className="shop-page">
      <Sidebar />

      <div className="product-cards">
        <ProductCard
          image="product1.jpg"
          name="Product 1"
          price="100"
          description="Description for Product 1"
        />
        <ProductCard
          image="product2.jpg"
          name="Product 2"
          price="100"
          description="Description for Product 2"
        />

        <ProductCard
          image="product3.jpg"
          name="Product 3"
          price="100"
          description="Description for Product 3"
        />
        <ProductCard
          image="product4.jpg"
          name="Product 4"
          price="100"
          description="Description for Product 3"
        />
        <ProductCard
          image="product5.jpg"
          name="Product 5"
          price="100"
          description="Description for Product 3"
        />
        <ProductCard
          image="product6.jpg"
          name="Product 6"
          price="100"
          description="Description for Product 3"
        />
        <ProductCard
          image="product7.jpg"
          name="Product 7"
          price="100"
          description="Description for Product 3"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
