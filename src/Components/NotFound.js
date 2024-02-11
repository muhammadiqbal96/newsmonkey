import React, { Component } from 'react'

export default class
    extends Component {
    render() {
        let {mode} = this.props
        return (
            <div>
                <div>
                    <h1 style={{
                        fontSize: "85px",
                        fontWeight: "bolder",
                        textAlign: "center",
                        color: mode == "Light" ? "white" : "black"
                    }}>404</h1>
                    <h1 style={{
                        fontSize: "55px",
                        fontWeight: "bold",
                        textAlign: "center",
                        color: mode == "Light" ? "white" : "black"
                    }}>Page not found!</h1>
                    <p style={{
                        textAlign: "center",
                        color: mode == "Light" ? "white" : "black"
                    }}>The page you are looking for doesn't exist or an other error occurred.</p>
                    <p style={{
                        textAlign: "center",
                        color: mode == "Light" ? "white" : "black"
                    }}>Go back, or head over NewsMonkey.com to choose a new direction.</p>
                </div>
            </div>
        )
    }
}
