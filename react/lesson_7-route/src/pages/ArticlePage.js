import React, { Component } from "react";
import axios from "axios";

export class ArticlePage extends Component {
  state = {
    article: null,
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
      const article = news.data.articles.find(
        (a) => a.publishedAt === this.props.match.params.id
      );
      console.log("article", article);
      this.setState({ article });
    } catch (errr) {
      console.log("errr", errr);
    }
  };
  render() {
    console.log(this.props.match.params.id);
    const { article } = this.state;
    return (
      article && (
        <div>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt="news" />
          <p>{article.description}</p>
        </div>
      )
    );
  }
}
