import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    try {
      let url =
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=e5dda8be0d3443e9ad8f940eda102843&page=1&pageSize=20";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  handlePrevClick = async () => {
    console.log("Previous");
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e5dda8be0d3443e9ad8f940eda102843&page=${
        this.state.page - 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      console.log("No more pages");
    } else {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e5dda8be0d3443e9ad8f940eda102843&page=${
          this.state.page + 1
        }&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
        });
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
  };

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2>News App - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
