import React, { Component, useState } from "react";
// import axios from "axios";
import { InputCustom } from "../src/ui/InputCustom";

// class App extends Component {
//   state = {
//     qwery: "",
//     news: [],
//   };

//   handleChange = (e) => {
//     this.setState({
//       qwery: e.target.value,
//     });
//   };

//   componentDidMount() {
//     this.fetchNew();
//   }

//   fetchNew = async (qwery = "apple") => {
//     try {
//       const data = await axios.get(
//         `http://newsapi.org/v2/everything?q=${qwery}&from=2020-03-21&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f`
//       );
//       console.log("data", data.data.articles);
//       this.setState({
//         news: data.data.articles,
//       });
//     } catch (err) {
//       console.log("err", err);
//     }
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state.qwery);
//     this.fetchNew(this.state.qwery);
//   };

//   render() {
//     console.log("render");
//     const { news } = this.state;
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" name="todo" onChange={this.handleChange} />
//         </form>
//         <ul>
//           {news.map((article, indx) => (
//             <li onClick={() => console.log(article.url)} key={indx}>
//               <a href={article.url} target="_blank">
//                 <img
//                   style={{ width: "300px" }}
//                   alt="p"
//                   src={article.urlToImage}
//                 />
//               </a>
//               <p>{article.description}</p>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default App;
import { useSelector, useDispatch } from "react-redux";

const initialState = {
  name: null,
  age: null,
};

const App = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    dispatch({ type: "ADD_USER_BASE_NAME", payload: state.name });
  };

  return (
    <>
      <InputCustom type={"text"} name={"name"} changeFn={handleChange} />
      <InputCustom type={"text"} name={"age"} changeFn={handleChange} />
      <InputCustom type={"text"} name={"description"} changeFn={handleChange} />

      {/* <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="age" onChange={handleChange} />
      <input type="text" name="description" onChange={handleChange} /> */}
      <h2>name: {state.name} </h2>
      <h2>age: {state.age} </h2>
      <h2>description: {state.description}</h2>
    </>
  );
};

export default App;
