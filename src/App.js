import './css/style.css' ;
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ContactUs' ;
import Home2 from './components/Home2'; 
import ThePageOfArticles from './Pages/ThePageOfArticles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import ActionsContainer from './components/ActionsContainer';
import ContactUs from './components/ContactUs';

class App extends Component {

 

  render() {
   
    return (
      <div>



       <Router>
        <Switch>
          <Route path="/Pages/ThePageOfArticles" component={ThePageOfArticles} />
          <Route path="/about" component={Aboutus} />
          <Route path="/action" component={ActionsContainer}/>
          <Route path="/contact" component={ContactUs}/>
          <Route path="/" component={Home2} />
        
        </Switch>
    </Router>
  



  </div>
    
      );
  }
}

export default App;

