import React, { Component } from "react";
import Counter from "./counter/Counter";
import { Shop } from "./shop/Shop";
import products from "../products";
import { Category } from "./category/Category";
import ProductCard from "./card/ProductCard";
class App extends Component {
  state = {
    basket: [],
    isVisiable: false,
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

  render() {
    const { basket, isVisiable } = this.state;

    return (
      <>
        <button onClick={this.toggle}>{isVisiable ? "SHOP" : "BASKET"}</button>
        {isVisiable ? (
          basket.map((product) => <ProductCard data={product} />)
        ) : (
          <>
            <Category />
            <Shop
              getCurrentProduct={this.getCurrentProduct}
              data={products}
              showSize={true}
            />
          </>
        )}
      </>
    );
  }
}

export default App;

// class App extends React.Component {
//   state = {
//     count: 0,
//     isVisiable: false,
//   };

//   increment = (step) => {
//     this.setState((prevState) => {
//       console.log("prevState", prevState);
//       return {
//         count: prevState.count + step,
//       };
//     });
//   };

//   decrement = (step) => {
//     this.setState((prevState) => {
//       console.log("prevState", prevState);
//       return {
//         count: prevState.count - step,
//       };
//     });
//   };

//   toggle = () => {
//     this.setState((prevState) => {
//       console.log("prevState", prevState);
//       return {
//         isVisiable: !prevState.isVisiable,
//       };
//     });
//   };

//   render() {
//     console.log("re-render App");
//     const { count, isVisiable } = this.state;

//     return (
//       <>
//         <h2>State : {count}</h2>
//         <button onClick={this.toggle}>{isVisiable ? "Hide" : "Show"}</button>
//         {isVisiable && <Counter plus={this.increment} minus={this.decrement} />}
//       </>
//     );
//   }
// }

// export default App;
