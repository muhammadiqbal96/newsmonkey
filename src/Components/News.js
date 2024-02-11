import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Loader from './Loader'

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false
    }
  }
  async componentDidMount() {
    this.setState({
      loading : true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${document.getElementById("firstwords").innerHTML === "NewsMonkey" ? "" : document.getElementById("firstwords").innerHTML}&apiKey=0461e8ad56164098be08e625f3a4f28e`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      loading: false
    })
  }
  render() {
    let { mode, word } = this.props
    return (
      <div className='container my-2' style={{width:"100%", paddingTop: "75px" }}>
        {this.state.loading && <Loader/>}
        {!this.state.loading && <h1 className='my-3 text-center' style={{ color: mode === "Light" ? "white" : "black"}}><b id='firstwords'>{word.charAt(0).toUpperCase() + word.slice(1)}</b><b> - Top Headlines</b></h1>}
        <div className="row gap-lg-5 d-flex align-content-center justify-content-center" id='media-query' style={{ color: mode === "Light" ? "white" : "black" }}>
          {this.state.article.length < 2 ? "Sorry! Nothing to show related to this particular field." : this.state.article.map((e) => {
            return <div className="col-sm-12 col-md-6 col-lg-3 mx-lg-1 my-2" key={e.url}>
              <Newsitem urlToImage={e.urlToImage} url={e.url} title={e.title ? e.title.slice(0, 55) : ""} description={e.description ? e.description.slice(0, 85) : ""} mode={mode}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}