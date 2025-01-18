import React, { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export default function News(props) {
  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  document.title = `newsQuick - ${props.category === "general" ? "Home" : capitalizeFirstLetter(props.category)}`;



  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bad8f00d36344af79ffb0782c43b83b4&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    props.setProgress(40);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    // console.log(parsedData);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults)
    setloading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  },[]);


  // handlePclick = async () => {


  //   console.log("Previous")
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=09316fc70aeb4a3591e15789bb0658af&page=${state.page - 1}&pageSize=${props.pageSize}`;

  // setloading(true);
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  // setpage(page - 1);
  // setarticles(parsedData.articles);
  // setloading(false);

  // }

  // handleNclick = async () => {

  //   if (state.page + 1 > Math.ceil(state.totalResults / 20)) {

  //   }
  //   else {
  //     console.log("Next")
  //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=09316fc70aeb4a3591e15789bb0658af&page=${state.page + 1}&pageSize=${props.pageSize}`;
  // setloading(true);
  //     let data = await fetch(url);
  //     let parsedData = await data.json();

  // setpage(page + 1);
  // setarticles(parsedData.articles);
  // setloading(false);
  //   }
  // }

  // using this function for infinite scrill bar 


  const fetchMoreData = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bad8f00d36344af79ffb0782c43b83b4&page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page + 1);

    // setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);

    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
  }
  return (
    <>
      <h2 className="text-center" style={{ margin: '35px 0px',marginTop: '90px' }}>newsQuick - Today's Top {props.category === "general" ? "" : capitalizeFirstLetter(props.category)} Headlines</h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
        // inverse={true}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      // scrollableTarget="scrollableDiv"
      >
        <div className="container">
          <div className="row my-3">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} dateTime={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="Buttons d-flex justify-content-between">
            <button type="button" disabled={state.page <= 1} className="btn btn-dark" onClick={handlePclick}>&larr; Previous</button>
            <button type="button" disabled={(state.page + 1 > Math.ceil(state.totalResults / 20))} className="btn btn-dark" onClick={handleNclick}>Next &rarr;</button>
          </div> */}

    </>
  );
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
