import React,{ Component } from 'react';
import '../css/style.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App';
import EspacePersoHeader from '../headers/EspacePersoHeader.js';
import EspacePersoHome from './EspacePersoHome.js';
import Footer from './Footer.js';
import OffersContainer from './OffersContainer.js';
import ThePageOfArticles from '../Pages/ThePageOfArticles';
import Localisation from './Localisation.js';
class EspacePerso extends Component{
    render(){
        return(

        <div>
        <EspacePersoHeader />
        <EspacePersoHome />
        <Localisation />
        <OffersContainer />
        <ThePageOfArticles />
        <Footer />


         </div>       
           
            
             


             
           
             

        )
    }
}

export default EspacePerso;
