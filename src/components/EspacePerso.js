import React,{ Component } from 'react';
import '../css/style.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App';
import EspacePersoHeader from '../headers/EspacePersoHeader.js';
import EspacePersoHome from './EspacePersoHome.js';
import Footer from './Footer.js';
import Action from './Action.js';
class EspacePerso extends Component{
    render(){
        return(

        <div>
        <EspacePersoHeader />
        <EspacePersoHome />
        <Action />
        <Footer />


         </div>       
           
            
             


             
           
             

        )
    }
}

export default EspacePerso;
