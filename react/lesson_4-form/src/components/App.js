import React, { Component } from "react";
// import Form from "./form/Form";
// import Counter from "./counter/Counter";
import { Shop } from "./shop/Shop";
import products from "../products";
import { Category } from "./category/Category";
import ProductCard from "./card/ProductCard";
import { Search } from "../components/search/Search";

class App extends Component {
  state = {
    basket: [],
    isVisiable: false,
    productFilter: [],
  };

  getCurrentProduct = (item) => {
    console.log("item", item);
    this.setState((prevState) => ({
      basket: [...prevState.basket, item],
    }));
  };

  toggle = () => {
    this.setState((prev) => ({
      isVisiable: !prev.isVisiable,
    }));
  };

  filter = (size) => {
    console.log(size.value);
    const productFilter = products.filter((product) =>
      product.availableSizes.includes(size.value)
    );
    console.log("productFilter", productFilter);
    this.setState({ productFilter });
  };

  render() {
    const { basket, isVisiable, productFilter } = this.state;

    return (
      <>
        <button onClick={this.toggle}>{isVisiable ? "SHOP" : "BASKET"}</button>
        <Search filter={this.filter} />
        {isVisiable ? (
          basket.map((product) => <ProductCard data={product} />)
        ) : (
          <>
            <Category />
            <Shop
              getCurrentProduct={this.getCurrentProduct}
              data={productFilter.length ? productFilter : products}
              showSize={true}
            />
          </>
        )}
      </>
    );
  }
}

export default App;

// class App extends Component {
//   state = {
//     data: [],
//   };

//   getUserInfo = (data) => {
//     this.setState((prev) => ({ data: [...prev.data, data] }));
//   };

//   render() {
//     console.log("re-render App");

//     return <Form getUserInfo={this.getUserInfo} />;
//   }
// }

// export default App;
