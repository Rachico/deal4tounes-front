import React,{ Component } from 'react';
import '../css/style.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App';
import facebook from '../img/facebook.png';
import insta from '../img/insta.png';



class Footer extends Component{
    render(){
        return(
        <section id="foooter">
            <div id="logo">
            <h2><a href="#" className="scrollto" style={{ fontFamily:"Open Sans"}}>Deal4Tounes</a></h2>
            </div>

            <p style={{textAlign:'center',padding:'15px'}}>Made with love &hearts;</p>

            <div style={{display:'flex', justifyContent:'center'}}>
                <div style={{display:'inline-block'}}><a href=""><img src={facebook} style={{height:'20px',weight:'20px'}}></img></a></div>
                <div style={{display:'inline-block'}}><a href=""><img src={insta} style={{height:'20px',weight:'20px'}}></img></a></div>  
           </div>

            <div style={{display:'flex', justifyContent:'center',padding:'15px'}}>
                <a href="">Envoyez nous un message</a>                
            </div>
            



        </section>


            )
        }
    }
    
    export default Footer;