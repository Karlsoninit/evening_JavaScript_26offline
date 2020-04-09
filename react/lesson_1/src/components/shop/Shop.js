import React from "react";
// import { List } from "../list/List";
import ProductCard from "../card/ProductCard";

export const Shop = ({ data, showSize }) => {
  return (
    <>
      <ul>
        {data.map((product) => (
          // <List key={product.id} {...product} showSize={showSize} />
          <ProductCard key={product.id} {...product} showSize={showSize} />
        ))}
      </ul>
    </>
  );
};

Shop.defaultProps = {
  data: [],
  showSize: false,
};
