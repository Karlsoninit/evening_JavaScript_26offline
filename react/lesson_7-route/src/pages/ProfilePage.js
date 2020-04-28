import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class ProfilePage extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    try {
      const news = await axios.get(
        "http://newsapi.org/v2/everything?q=apple&from=2020-03-28&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f"
      );
      console.log("news", news.data.articles);
      this.setState({ news: news.data.articles });
    } catch (errr) {
      console.log("errr", errr);
    }
  };

  render() {
    return (
      <ul>
        {this.state.news.map((article, indx) => (
          <li key={indx}>
            <Link
              to={{
                pathname: `/profile/${article.publishedAt}`,
                search: "?category=adventure",
                hash: "#treasure-island",
                state: { from: "/dashboard" },
              }}
            >
              <img style={{ width: 400 }} src={article.urlToImage} alt="news" />
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
