import './css/style.css' ;
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
import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import $ from 'jquery';
import CommentGroup from './components/Comments/CommentGroup';
import EspacePersoHeader from './headers/EspacePersoHeader';
import EspacePerso from './components/EspacePerso';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {

 

  render() {
   
   
    return (
      <div>

<EspacePerso />




  </div>
    
      );
  }
}

export default App;


