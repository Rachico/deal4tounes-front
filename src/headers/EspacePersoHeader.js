import React,{ Component } from 'react';
import '../css/style.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App';
import signout from '../img/signout.png';
import parameters from '../img/parameters.png';
import home from '../img/home.png';
import EspacePersoHome from '../components/EspacePersoHome.js'; 
import createBrowserHistory from 'history/createBrowserHistory';


class EspacePersoHeader extends Component{

  handleLogout = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('store');
    localStorage.removeItem('name');
    localStorage.removeItem('user_id');
    history.push('/');
    this.refreshPage();
    console.log('done');
  };

  refreshPage() {
    window.location.reload(false);
  }

    render(){
        return(
            <header id="header">
             
            <div className="container-fluid">
        
              <div id="logo" className="pull-left">
              <h2><a href="#" className="scrollto" style={{ fontFamily:"Open Sans"}}>Deal4Tounes</a></h2>
              </div>
              <nav id="nav-menu-container">
                <ul className="nav-menu d-flex flex-col align-items-center">
                <li ><a href="#espace"><img src={home} style={{height:"40px",width:"40px"}}></img></a></li>
                <li style={{ fontFamily:"Open Sans",fontSize:"20px"}}><a class="aa" href="#Espace_actions">consulter les actions</a></li>
                <li style={{ fontFamily:"Open Sans",fontSize:"20px"}}><a class="aa" href="">consulter les offres</a></li>
                <li style={{ fontFamily:"Open Sans",fontSize:"20px"}}><a class="aa" href="">Articles</a></li>

                <li className="">
                  <a href="" style={{ fontFamily:"Open Sans"}} className="mt-2"  onClick={()=> this.handleLogout()} >
                    Se déconnecter
                  </a>
                  <img src={signout} style={{height:"20px",width:"20px"}}></img>
                </li>
    
                
                </ul>
                </nav>
                </div>
                </header>


        )}}

        export default EspacePersoHeader ;
        export const history = createBrowserHistory();