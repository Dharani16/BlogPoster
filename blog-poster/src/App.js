import React, { Component } from 'react';
import './App.css';
import{BrowserRouter as Router,Route,Link} from 'react-router-dom';
// import {browserHistory} from 'react-router'
import {PostContainer} from './components/PostContainer';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {NewPost} from './components/NewPost';
import {Readmore} from './components/Readmore';

class App extends Component {
  render() {
    return (      
      <div className="container">
        <Router>                
          <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                        
                </button>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <div className="col-lg-10 col-lg-offset-4">
                  <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/newpost">New Post</Link></li>                  
                  </ul> 
                </div>                   
              </div>
              <Route exact path ="/" component={PostContainer}/>
              <Route path ="/about" component={About}/>
              <Route path ="/contact" component={Contact}/>
              <Route path ="/newpost" component={NewPost}/>  
              <Route path ={"/readmore/:id"} component={Readmore}/> 
          </nav>        
        </Router> 
        <div className="footer">
            <span className="footerText">copyright@2017</span>
        </div>       
      </div>        
    );
  }
}

export default App;

