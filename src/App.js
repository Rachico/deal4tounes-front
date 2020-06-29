import './css/style.css' ;
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ContactUs' ;
import Home2 from './components/Home2' ; 


import ThePageOfArticles from './Pages/ThePageOfArticles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {

 

  render() {
   
    return (
      <div>


<div className="app-routes">
       <BrowserRouter>
    <Switch>
      <Route exact path="/Pages/ThePageOfArticles" component={ThePageOfArticles} />
      <Route exact path="/" component={Home2} />
    </Switch>
    </BrowserRouter>
  </div>




  </div>
    
      );
  }
}

export default App;
/*
import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import $ from 'jquery';
import CommentGroup from './components/Comments/CommentGroup'
import ActionsContainer from './components/ActionsContainer'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
<div className="app-routes">
       <BrowserRouter>
    <Switch>
      <Route path="/login" component={ThePageOfArticles} />
      <Route path="/" component={Home2} />
    </Switch>
    </BrowserRouter>
  </div>

*/