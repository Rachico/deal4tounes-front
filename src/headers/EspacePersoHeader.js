import React,{ Component } from 'react';
import '../css/style.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App';
import signout from '../img/signout.png';
import parameters from '../img/parameters.png';
import home from '../img/home.png';


class EspacePersoHeader extends Component{
    render(){
        return(
            <header id="header">
             
            <div className="container-fluid">
        
              <div id="logo" className="pull-left">
              <h2><a href="#" className="scrollto" style={{ fontFamily:"Open Sans"}}>Deal4Tounes</a></h2>
              </div>
              <nav id="nav-menu-container">
                <ul className="nav-menu">
                <li ><a ><img src={home} style={{height:"40px",width:"40px"}}></img></a></li>
                <li style={{ fontFamily:"Open Sans",fontSize:"20px"}}><a class="aa" href="">consulter les actions</a></li>
                <li style={{ fontFamily:"Open Sans",fontSize:"20px"}}><a class="aa" href="">consulter les offres</a></li>
                <li className="dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={parameters} style={{height:"20px",width:"20px"}}></img><a href="" style={{ fontFamily:"Open Sans"}}>Paramètres</a>
                <ul>
                    
                      <div id="popover-content" className="hide" style={{width :'200px'}}>
                      <a href=""><div class="dropdownbutton"><p>Changer le mot de passe</p></div></a>
      
                      <a><div></div></a>

                      </div>
                </ul>
                
                </li>

                <li><img src={signout} style={{height:"20px",width:"20px"}}></img><a href="" style={{ fontFamily:"Open Sans"}}>Se déconnecter</a></li>
    
                
                </ul>
                </nav>
                </div>
                </header>


        )}}

        export default EspacePersoHeader ;