import React, { Component } from 'react';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <ul className="header">
            <li> <a href="#">Home</a></li>
            <li> <a href="#">About</a></li>
            <li> <a href="#">Contact</a></li>
            <li> <a href="#">New Post</a></li>
          </ul>
      </div>
    );
  }
}

export default App;

class Home extends Component{
  render(){
    return(
      <div>
        <h2>Homepage</h2>
      </div>
    )
  }
}
export default Home;

