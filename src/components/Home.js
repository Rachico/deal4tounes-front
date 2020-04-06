import '../css/style.css' ;
import '../App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from './Aboutus';
import ContactUs from './ContactUs';
import HeaderConnect from './Header';
import { Button } from 'react-bootstrap';
import $ from 'jquery';

class App extends Component {
  componentDidMount(){
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
    
}

 
  render(){
    
  return (
           
               
   <div>     
  
        <section id="intro">
        
        <div className="intro-container">
        <div id="introCarousel" className="carousel  slide carousel-fade tc" data-ride="carousel">
        <ol className="carousel-indicators"></ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="carousel-background"><img src={require('../img/clasped-hands-541849_1920.jpg')} alt=""/></div>
                  <div className="carousel-container">
                  <div className="carousel-content" style={{border: '1px',background:'#fff',opacity: '1',padding:'-30px',borderRadius:'5px', width:'500px', height:'350px' }} >

      <h2 style={{fontSize:"40px", fontFamily:"Open Sans", padding:'40px'}}>Créez un impact positif sur le monde qui vous entoure !</h2>

      <a href="#featured-services" className="btn btn-success grow" style={{fontFamily:"Open Sans"}}>Commencez Maintenant</a>
                    
                    </div>
                  </div>
                </div>
              
              </div>

              
            </div>
            
          </div>
        </section>
        

    </div>
  
      );
}
}
export default App;
