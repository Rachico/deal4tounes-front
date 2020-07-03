import './css/style.css';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ContactUs' ;
import Home2 from './components/Home2' ; 
import ActionsContainer from './components/ActionsContainer'; 
import OfferContainer from './components/OffersContainer';
import { BrowserRouter as Router,  Link } from "react-router-dom";
import HeaderConnect from '../src/headers/HeaderConnect';
import ThePageOfArticles from './Pages/ThePageOfArticles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EspacePerso from './components/EspacePerso.js';
import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';
class App extends Component {

 

  render() {
   
    return (
      <div>
      
      <Home2 />
     





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
