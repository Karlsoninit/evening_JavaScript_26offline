import React, { Component } from "react";

export class HomePage extends Component {
  state = {};

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return <h2>HomePage</h2>;
  }
}
