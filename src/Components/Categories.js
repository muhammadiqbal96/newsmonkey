import React, { Component } from 'react'
import business from "./business.png";
import sports from "./sports.png";
import fasion from "./fashion.png";
import entertainment from "./entertainment.png";
import education from "./education.png";
import health from "./health.png";
import war from "./war2.png";
import politics from "./politics.png";
import economy from "./stockexchange.png";
import { Link } from "react-router-dom";

export default class extends Component {

    imgclick = (category) => {
        return category
    }

    render() {
        let { mode,imgclick } = this.props
        return (
            <div className='container my-5 d-flex align-content-center justify-content-center' id='category-cont' style={{ color: mode === "Light" ? "white" : "black", paddingTop: "75px"  }}>
                <div className="row my-1">
                    <div className="col-sm-6 col-lg-4 my-2" onClick={() => imgclick("business")}>
                        <Link to="/home"><img src={business} style={{ border: mode === "Dark" ? "2px solid rgb(250, 236, 236)" : "2px solid rgb(80, 79, 79)" }} className='imagesicon' alt="Business" /></Link>
                    </div>
                    <div className="col-sm-6 col-lg-4 my-2" onClick={() => imgclick("politics")}>
                        <Link to="/home"><img src={politics} style={{ border: mode === "Dark" ? "2px solid rgb(250, 236, 236)" : "2px solid rgb(80, 79, 79)" }} className='imagesicon' alt="Politics" /></Link>
                    </div>
                    <div className="col-sm-6 col-lg-4 my-2" onClick={() => imgclick("economy")}>
                        <Link to="/home"><img src={economy} style={{ border: mode === "Dark" ? "2px solid rgb(250, 236, 236)" : "2px solid rgb(80, 79, 79)" }} className='imagesicon' alt="Economy" /></Link>
                    </div>
                    <div className="col-sm-6 col-lg-4 my-2" onClick={() => imgclick("war")}>
                        <Link to="/home"><img src={war} style={{ border: mode === "Dark" ? "2px solid rgb(250, 236, 236)" : "2px solid rgb(80, 79, 79)" }} className='imagesicon' alt="War" /></Link>
                    </div>
                    <div className="col-sm-6 col-lg-4 my-2" onClick={() => imgclick("education")}>
                        <Link to="/home"><img src={education} style={{ border: mode === "Dark" ? "2px solid rgb(250, 236, 236)" : "2px solid rgb(80, 79, 79)" }} className='imagesicon' alt="Education" /></Link>
                    </div>
                    <div className="col-sm-6 col-lg-4 my-2" onClick={() => imgclick("health")}>
                        <Link to="/home"><img src={health} style={{ border: mode === "Dark" ? "2px solid rgb(250, 236, 236)" : "2px solid rgb(80, 79, 79)" }} className='imagesicon' alt="Health" /></Link>
                    </div>
                    <div className="col-sm-6 col-lg-4 my-2" onClick={() => imgclick("sports")}>
                        <Link to="/home"><img src={sports} style={{ border: mode === "Dark" ? "2px solid rgb(250, 236, 236)" : "2px solid rgb(80, 79, 79)" }} className='imagesicon' alt="Sports" /></Link>
                    </div>
                    <div className="col-sm-6 col-lg-4 my-2" onClick={() => imgclick("entertainment")}>
                        <Link to="/home"><img src={entertainment} style={{ border: mode === "Dark" ? "2px solid rgb(250, 236, 236)" : "2px solid rgb(80, 79, 79)" }} className='imagesicon' alt="Entertainment" /></Link>
                    </div>
                    <div className="col-sm-6 col-lg-4 my-2" onClick={() => imgclick("fasion")}>
                        <Link to="/home"><img src={fasion} style={{ border: mode === "Dark" ? "2px solid rgb(250, 236, 236)" : "2px solid rgb(80, 79, 79)" }} className='imagesicon' alt="fasion" /></Link>
                    </div>
                </div>

            </div>
        )
    }
}
