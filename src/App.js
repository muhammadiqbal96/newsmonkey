import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from './Components/News';
import Categories from './Components/Categories';
import NotFound from './Components/NotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "Dark",
      word: "NewsMonkey"
    }
  this.togleMode = this.togleMode.bind(this);
}
togleMode() {
  if (this.state.mode==="Dark") {
    this.setState({
      mode: "Light"
    })
    document.body.style.backgroundColor = "rgb(56,56,56)";
  } else {
    this.setState({
      mode: "Dark"
    })
    document.body.style.backgroundColor = "white"
  }
}
  render() {
    return (
      <Router>
        <div className="Container">
          <Navbar toglemode={this.togleMode} mode={this.state.mode}/>
          <Routes>
            <Route exact path='' element={<News word={this.state.word} mode={this.state.mode}/>}></Route>
            <Route exact path='/*' element={<NotFound mode={this.state.mode}/>}></Route>
            <Route exact path='/home' element={<News word={this.state.word} mode={this.state.mode}/>}></Route>
            <Route exact path='/categories' element={<Categories imgclick={ word => this.setState({word:word})} mode={this.state.mode}/>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
