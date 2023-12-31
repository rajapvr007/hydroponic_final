import React from 'react';

const ProductCard = ({ image, name, price, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default ProductCard;
