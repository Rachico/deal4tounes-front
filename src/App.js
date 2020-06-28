import './css/style.css' ;
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ContactUs' ;
import Home2 from './components/Home2' ; 
import ActionsContainer from './components/ActionsContainer'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderConnect from '../src/headers/HeaderConnect';
import ThePageOfArticles from './Pages/ThePageOfArticles';
import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import $ from 'jquery';
import CommentGroup from './components/Comments/CommentGroup';
import EspacePerso from './components/EspacePerso';
import EspacePersoHeader from './headers/EspacePersoHeader.js';

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