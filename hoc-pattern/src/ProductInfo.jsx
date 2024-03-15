import React from "react";

const ProductInfo = ({ product }) => {
  const { name, price, description, rating } = product || {};
  return product ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <p>{rating}</p>
    </>
  ) : (
    <p>loading product...</p>
  );
};

export default ProductInfo;
