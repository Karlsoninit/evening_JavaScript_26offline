import React from "react";
import { Shop } from "./shop/Shop";
import products from "../products";
import { Category } from "./category/Category";

const App = () => {
  return (
    <>
      <Category />
      <Shop data={products} showSize={true} />
    </>
  );
};

export default App;
