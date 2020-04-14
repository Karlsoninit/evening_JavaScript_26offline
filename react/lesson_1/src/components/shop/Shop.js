import React from "react";
// import { List } from "../list/List";
import ProductCard from "../card/ProductCard";

export const Shop = ({ data, showSize, getCurrentProduct }) => {
  return (
    <>
      <ul>
        {data.map((product) => (
          // <List key={product.id} {...product} showSize={showSize} />
          <ProductCard
            key={product.id}
            data={product}
            showSize={showSize}
            getCurrentProduct={getCurrentProduct}
          />
        ))}
      </ul>
    </>
  );
};

Shop.defaultProps = {
  data: [],
  showSize: false,
};
