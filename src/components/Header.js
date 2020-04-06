import '../css/style.css' ;
import '../App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home' ; 
import ActionsContainer from '../components/ActionsContainer'; 
import Aboutus from '../components/Aboutus';
import ContactUs from '../components/ContactUs';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Header extends Component {


    render(){
      
    return (
             
     
  <Router>
                  
  <header id="header" className="ma4">
        
  
          <div id="logo" class="pull-left">
            <h1 style={{fontFamily:"Open Sans", color:"white"}}><a href="/">Deal4tounes</a></h1>
          </div>
  
          <nav id="nav-menu-container">
              <div className="row menu-active" style={{fontFamily:"Open Sans"}}>
                <div className="col">
                  <Link to="/"  className="font-weight-bold" style={{fontFamily:"Open Sans",color:"white"}}>Home</Link>
                </div>
                <div className="col">
                  <Link to="/about" className="font-weight-bold" style={{fontFamily:"Open Sans",color:"white"}}>About</Link>
                </div>
                <div className="col">
                  <Link to="/actions" className="font-weight-bold" style={{fontFamily:"Open Sans",color:"white"}}>Actions</Link>
                </div>
                <div className="col">
                  <Link to="/actions" className="font-weight-bold" style={{fontFamily:"Open Sans",color:"white"}}>Signup</Link>
                </div>
                <div className="col">
                  <Link to="/actions" className="font-weight-bold" style={{fontFamily:"Open Sans",color:"white"}}>Login</Link>
                </div>
                <div className="col">
                  <Link to="/contact" className="font-weight-bold" style={{fontFamily:"Open Sans",color:"white"}}>Contact</Link>
                </div>
              </div>  
          </nav>
          
       
       
  </header>
  
        <hr />
  
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Aboutus} />
        <Route path="/actions" component={ActionsContainer} />
        <Route path="/contact" component={ContactUs} />
  
      
    </Router>
  );   
                
    
     
    
  }
  }
  export default Header;