import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [nextPage, setNextPage] = useState(null);

  const caps = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const update = async () => {
    props.setProgress(10);
    const url = `https://newsdata.io/api/1/news?country=${props.country}&image=1&category=${props.category}&apiKey=${props.apiKey}&size=${props.size}&language=${props.language}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData)
    props.setProgress(70);
    setResults(parsedData.results)
    setTotalResults(parsedData.totalResults)
    setNextPage(parsedData.nextPage);
    setLoading(false)
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    if (nextPage) {
      const url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&page=${nextPage}&country=${props.country}&image=1&category=${props.category}&size=${props.size}&language=${props.language}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setResults(results.concat(parsedData.results));
      setNextPage(parsedData.nextPage);
    }
  };

  useEffect(() => {
    update();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="text-center" style={{ color: "white", margin: "35px 0px" }}>
        NewsApp - Top {caps(props.category)} Headlines
      </h1>

      {loading && <Spinner />} 

      {results.length > 0 && (
        <InfiniteScroll
          dataLength={results.length}
          next={fetchMoreData}
          hasMore={results.length !== totalResults}
        >
          <div className="container">
            <div className="row">
              {results.map((element, link) => {
                return (
                  <div className="col-md-4 my-3" key={link}>
                    <NewsItem
                       title={element.title ? element.title.slice(0, 50) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 50)
                          : ""
                      }
                      image_url={
                        element.image_url
                          ? element.image_url
                          : "https://st4.depositphotos.com/17828278/24401/v/450/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"
                      }
                      link={element.link}
                      creator={element.creator ? element.creator : "Unknown"}
                      pubDate={element.pubDate}
                      source_id={caps(element.source_id)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

News.defaultProps = {
  country: "in",
  size: 8,
  category: "general",
  language: 'en'
};

News.propTypes = {
  country: PropTypes.string,
  size: PropTypes.number,
  category: PropTypes.string,
};

export default News;
