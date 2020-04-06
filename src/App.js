import './css/style.css' ;
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ContactUs' ;
import Home from './components/Home' ; 
import ActionsContainer from './components/ActionsContainer'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ThePageOfArticles from './Pages/ThePageOfArticles';
import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import $ from 'jquery';

class App extends Component {


  render(){
    
  return(
    <div>
      <Header />
      <Aboutus />
      <ContactUs />
    </div>
  );
}
}
export default App;
