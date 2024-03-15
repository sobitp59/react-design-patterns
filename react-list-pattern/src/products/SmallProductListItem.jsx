import React from "react";

const SmallProductListItem = ({ product }) => {
  const { name, price } = product;
  return (
    <p>
      {name} - {price}
    </p>
  );
};

export default SmallProductListItem;
