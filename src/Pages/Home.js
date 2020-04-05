import '../css/style.css' ;
import '../App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from '../components/Aboutus';
import ContactUs from '../components/ContactUs';
import HeaderConnect from '../headers/HeaderConnect';
import { Button } from 'react-bootstrap';

class App extends Component {

 
  render(){
    
  return (
           
               
   <div className="App">
   
              
  
  <section id="intro">
  [{ /*<HeaderConnect/>*/ }
  <div className="intro-container">
  <div id="introCarousel" className="carousel  slide carousel-fade tc" data-ride="carousel">
  <ol className="carousel-indicators"></ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="carousel-background"><img src={require('../img/intro-carousel/crop.png')} alt=""/></div>
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
  <Aboutus/>
<ContactUs/>

    </div>
  
      );
}
}
export default App;
