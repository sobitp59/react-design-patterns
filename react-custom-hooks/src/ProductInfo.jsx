import React from "react";
import { useResource } from "./custom-hooks/useResource";
import { useDataSource } from "./custom-hooks/useDataSource";
import { serverResource } from "./utils/serverResource";
import { localStorageResource } from "./utils/localStorgeResource";

const ProductInfo = ({ productId }) => {
  // const product = useResource(`http://localhost:8000/products/${productId}`);
  const product = useDataSource(
    serverResource(`http://localhost:8000/products/${productId}`)
  );
  const message = useDataSource(localStorageResource("message"));

  const { name, price, description, rating } = product || {};
  return product ? (
    <>
      <h3>
        {name}: {message}
      </h3>
      <p>{price}</p>
      <p>{description}</p>
      <p>{rating}</p>
    </>
  ) : (
    <p>loading product...</p>
  );
};

export default ProductInfo;
