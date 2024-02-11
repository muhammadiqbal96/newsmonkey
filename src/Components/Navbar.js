import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        let {mode,toglemode} = this.props
        return (
            <nav className={`navbar fixed-top navbar-expand-lg ${mode==="Dark"? "bg-body-tertiary" :"bg-dark border-bottom border-body"}`}  data-bs-theme={mode==="Light" ? "dark" : "light"}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home" style={{color:mode==="Dark"? "black" : "white"}}>NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" id='hover1' aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id='hover2' to="/categories">Categories</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch my-3">
                            <input className="form-check-input" onClick={toglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  style={{color:mode==="Dark"? "black" : "white"}}>Enable {mode}-Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
