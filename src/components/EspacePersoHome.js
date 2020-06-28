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
            <section>
            <div id="espace" class="section-bg wow fadeInUp">
            <div class="container">
            
            
            <div style={{padding:'40px'}}>
            <h1 class="hello" >Hello !</h1>
            <h1 class="hello">une belle journée pour changer le monde</h1>
            </div>
            </div>
            </div>            
            
            <div id="espaceperso_home">
            <h2 style={{textAlign:'center', textDecoration:'underline #18d26e'}}>Actualités</h2>
            <div style={{padding:'60px', display:'flex', justifyContent:'center'}}>

            <div class="article">
            <a href=""><img style={{height:'300px',width:'300px'}} src={hello} ></img></a>
            <div style={{maxWidth:'320px'}}><p class="article_name">Article 1</p></div>
            </div>

            <div  class="article">
            <a href=""><img style={{height:'300px',width:'300px'}} src={ocean} ></img></a>
            <div style={{maxWidth:'320px'}}><p class="article_name">Article 2</p></div>
            </div>

            <div class="article">
            <a href=""><img style={{height:'300px',width:'300px'}} src={plastic}></img></a>
            <div style={{maxWidth:'320px'}}><p class="article_name">Article 3</p></div>
            </div>

            </div> 
            <p><a href="">&#10132; Voir plus d'articles</a></p>
            
            
            </div></section>

            )
        }
    }
    
    export default EspacePersoHome;