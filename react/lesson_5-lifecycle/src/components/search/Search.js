import React from "react";
import Select from "react-select";
import products from "../../products";
console.log(products);

const uniqueSize = (allProducts) => {
  const allSize = allProducts.reduce((acc, elem) => {
    acc.push(...elem.availableSizes);
    return acc;
  }, []);
  return [...new Set(allSize)].map((elem) => ({
    value: elem,
    label: elem,
  }));
};

export const Search = ({ filter }) => (
  <Select
    options={[
      ...uniqueSize(products),
      { value: "All products", label: "All products" },
    ]}
    onChange={filter}
  />
);
