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
    currrentSize: null,
  };

  componentDidMount() {
    this.setState({
      basket: JSON.parse(localStorage.getItem("basket")) || [],
    });
  }

  getCurrentProduct = (item) => {
    console.log("item", item);
    this.setState((prevState) => ({
      basket: [...prevState.basket, item],
    }));
    localStorage.setItem(
      "basket",
      JSON.stringify([...this.state.basket, item])
    );
  };

  toggle = () => {
    this.setState((prev) => ({
      isVisiable: !prev.isVisiable,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currrentSize !== this.state.currrentSize) {
      const productFilter = products.filter((product) =>
        product.availableSizes.includes(this.state.currrentSize)
      );
      console.log("productFilter", productFilter);
      this.setState({ productFilter });
    }
  }

  filter = (size) => {
    this.setState({ currrentSize: size.value });
  };

  deleteBasketItem = (id) => {
    console.log("deleteBasketItem", id);
    this.setState((prev) => ({
      basket: prev.basket.filter((product) => product.id !== id),
    }));
    this.deleBAsketLocal(id);
  };

  deleBAsketLocal = (par) => {
    localStorage.setItem(
      "basket",
      JSON.stringify(this.state.basket.filter((product) => product.id !== par))
    );
  };

  render() {
    const { basket, isVisiable, productFilter } = this.state;

    return (
      <>
        <button onClick={this.toggle}>{isVisiable ? "SHOP" : "BASKET"}</button>
        <Search filter={this.filter} />
        {isVisiable ? (
          <div style={{ display: "flex" }}>
            {basket.map((product) => (
              <ProductCard
                data={product}
                inBasket={true}
                deleteBasketItem={this.deleteBasketItem}
              />
            ))}
          </div>
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
