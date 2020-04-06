import '../css/style.css' ;
import '../App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from '../components/Aboutus';
import ContactUs from '../components/ContactUs';
import HeaderConnect from '../headers/HeaderConnect';


class App extends Component {

 
  render(){
    
  return (
           
               
   <div className="App">
   
              
  
  <section id="intro">
  <HeaderConnect/>
  <div className="intro-container">
  <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
  <ol className="carousel-indicators"></ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="carousel-background"><img src={require('../img/intro-carousel/crop.png')} alt=""/></div>
            <div className="carousel-container">
            <div className="carousel-content" style={{border: '2px solid',background:'#fff',opacity: '0.45',padding:'-30px',borderRadius:'5px', width:'500px', height:'300px' }} >

<h2 style={{fontSize:"30px", fontFamily:"arial", padding:'40px'}}>Créez un impact positif sur le monde qui vous entoure !</h2>

<a href="#featured-services" className="btn-get-started scrollto">Commencez Maintenant</a>
              
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
