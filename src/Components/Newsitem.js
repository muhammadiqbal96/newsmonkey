import React, { Component } from 'react'
import newsjgp from "./news.jpg";

export default class Newsitem extends Component {
    render() {
        let {title,description,url,urlToImage,mode} = this.props
        return (
                <div className="card" style={{ width: "18rem",height:"25rem",backgroundColor:mode==="Dark"?"white":"black"}}>
                    <img src={urlToImage ? urlToImage : newsjgp} className="card-img-top" alt="..." style={{width:"17.9rem",height: "160px"}}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{color: mode==="Light"? "white":"black"}}><b>{title}...</b></h5>
                        <p className="card-text" style={{color: mode==="Light"? "white":"black"}}>{description}...</p>
                        <a href={url} className={`btn btn-sm btn-${mode==="Dark"?"primary":"dark"}`} target='_blank'>Read More</a>
                    </div>
                </div>
        )
    }
}
