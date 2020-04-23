import React from "react";

class Counter extends React.Component {
  state = {
    step: 3,
  };

  change = () => {
    this.props.plus(this.state.step);
  };

  render() {
    console.log("re-render Counter");
    const { step } = this.state;
    return (
      <>
        <button onClick={this.change}>plus</button>
        <button onClick={() => this.props.minus(step)}>minus</button>
      </>
    );
  }
}

export default Counter;
