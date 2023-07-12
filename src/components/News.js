import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
export class News extends Component {
static defaultProps = {
    country: "in",
    pageSize: 6,
    category: 'general'
}
static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }
  async update(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b90a9849e77450482d7258d751e9989&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b90a9849e77450482d7258d751e9989&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handlePreviousClick = async () => {
    this.setState({
      page: this.state.page - 1
    });
    this.update();
  };
  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1
    });
    this.update();
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: "35px 0px"}}>NewsApp - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 50) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 50)
                        : ""
                    }
                    image={
                      element.urlToImage
                        ? element.urlToImage
                        :"https://st4.depositphotos.com/17828278/24401/v/450/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"
                    }
                    newsURL={element.url}
                    author={element.author?element.author:"Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
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
            onClick={this.handlePreviousClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
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
