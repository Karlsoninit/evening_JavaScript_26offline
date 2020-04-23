import React, { Component } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

class Form extends Component {
  state = { ...initialState };

  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    const { name, email, password } = this.state;
    e.preventDefault();
    if (name.length && email.length && password.length !== 0) {
      this.props.getUserInfo(this.state);
      this.setState(initialState);
    } else {
      console.log("пусто :)");
    }
  };

  render() {
    const { name, email, password } = this.state;
    console.log("re-render Form");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={name}
          type="text"
          name="name"
          onChange={this.handleChange}
        />
        <input
          value={email}
          type="email"
          name="email"
          onChange={this.handleChange}
        />
        <input
          value={password}
          type="password"
          name="password"
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;
