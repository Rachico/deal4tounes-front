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
                
<header id="header">
      <div class="container-fluid" style={{fontFamily:"Open Sans"}}>

        <div id="logo" class="pull-left">
          <h1 style={{fontFamily:"Open Sans"}}><a href="/">Deal4tounes</a></h1>
        </div>

        <nav id="nav-menu-container">
            <div className="row menu-active" style={{fontFamily:"Open Sans"}}>
              <div className="col">
                <Link to="/"  className="font-weight-bold" style={{fontFamily:"Open Sans",color:"black"}}>Home</Link>
              </div>
              <div className="col">
                <Link to="/about" className="font-weight-bold" style={{fontFamily:"Open Sans",color:"black"}}>About</Link>
              </div>
              <div className="col">
                <Link to="/actions" className="font-weight-bold" style={{fontFamily:"Open Sans",color:"black"}}>Actions</Link>
              </div>
              <div className="col">
                <Link to="/actions" className="font-weight-bold" style={{fontFamily:"Open Sans",color:"black"}}>Signup</Link>
              </div>
              <div className="col">
                <Link to="/actions" className="font-weight-bold" style={{fontFamily:"Open Sans",color:"black"}}>Login</Link>
              </div>
              <div className="col">
                <Link to="/contact" className="font-weight-bold" style={{fontFamily:"Open Sans",color:"black"}}>Contact</Link>
              </div>
            </div>  
        </nav>
        
     </div> 
     
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
export default App;
