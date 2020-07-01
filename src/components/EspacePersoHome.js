import React,{ Component } from 'react';
import '../css/style.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App';
import hello from '../img/hello.jpg';
import ocean from '../img/ocean.jpg';
import plastic from '../img/plastic.jpg';
import testimonial2 from '../img/testimonial2.jpg';
import $ from 'jquery';

class EspacePersoHome extends Component{
    
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
        return(
            
            <div id="espace" class="section-bg wow fadeInUp">
            <div class="container">
            
            
            <div style={{padding:'40px'}}>
            <h1 class="hello" >Salut !</h1>
            <h1 class="hello">une belle journée pour changer le monde</h1>
            <center>
            <div style={{backgroundColor:'#13a456', height:'300px', width:'400px', borderRadius:'10px'}} class="mt-4">
              <p className="" style={{fontSize:'150px', color:'white'}}>1589</p>
            <h1 style={{color:'white'}}>points</h1>
            </div>
            </center>
            </div>
            </div>
            </div>            
            
            

            )
        }
    }
    
    export default EspacePersoHome;