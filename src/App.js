import './css/style.css' ;
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ContactUs' ;
import Home from './Pages/Home' ; 
import ActionsContainer from './components/ActionsContainer'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ThePageOfArticles from './Pages/ThePageOfArticles';
import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';
class App extends Component {


  render(){
    
  return (
           
   
<Router>
                
   <div className="App">
      <div className="row mh7 bg-light-gray pa3 tc">
      <div className="col fl w-10 hover-near-black ph1">
            <Link to="/">Home</Link>
          </div>
          <div className="col fl w-10 ph1">
            <Link to="/about">About</Link>
          </div>
          <div className="col fl w-10 ph1">
            <Link to="/actions">Actions</Link>
          </div>
          <div className="col fl w-10 ph1">
            <Link to="/actions">Sign up</Link>
          </div>
          <div className="col fl w-10 ph1">
            <Link to="/actions">Login</Link>
          </div>
          <div className="col fl w-10 ph1">
            <Link to="/contact">Contact</Link>
          </div>
       
        </div>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={Aboutus} />
      <Route path="/actions" component={ActionsContainer} />
      <Route path="/contact" component={ContactUs} />

    </div>
  </Router>
);   
              
  
   
  
}
}
export default App;
