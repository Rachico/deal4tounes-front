import React,{ Component } from 'react';
import AddModel from '../components/AddModel';
import '../css/style.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App';


class HeaderConnect extends Component{

  constructor(props){
    super(props);
    this.state ={deps:[], addModalShow : false, editModalShow : false}
}




    render(){
        let addModalClose =() => this.setState({addModalShow:false});
        return(
          
          



            <header id="header">
             
            <div className="container-fluid">
        
              <div id="logo" className="pull-left">
              <h2><a href="#" className="scrollto" style={{ fontFamily:"Open Sans"}}>Deal4Tounes</a></h2>
              </div>
              <nav id="nav-menu-container">
                <ul className="nav-menu">
               
                  <li className="menu-active"><a href="#intro" style={{ fontFamily:"Open Sans"}}>Accueil</a></li>
                  <li><a href="#aboutus" style={{ fontFamily:"Open Sans"}}>Qui sommes-nous</a></li>
                 
                  <li><a href="#actions" style={{ fontFamily:"Open Sans"}}>Actions</a></li>
                
                  <li><a href="#contact" style={{ fontFamily:"Open Sans"}}>Contact</a></li>
                   <li className="dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="" style={{ fontFamily:"Open Sans"}}>Login</a>
                    <ul>
                    
                      <div id="popover-content" className="hide" style={{width :'200px'}}>
                   <form style={{flexDirection: "column"}}>
                   <div className="form-group">
                   <label Htmlfor="exampleInputEmail1" style={{fontFamily:'Open Sans'}}><strong>email</strong></label>
                   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   </div>
                   <div className="form-group">
                   <label style={{fontFamily:'Open Sans'}}><strong>mot de passe</strong></label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                    <a href="" style={{fontFamily:'arial', fontSize:'10px'}}>Mot de passe oublié ?</a>
                    </div>
                    <button type="submit" className="btn btn-outline-dark"style={{backgroundColor:"#18d26e"}}>Se connecter</button>
                       </form>
                       </div>
                       </ul>
                      </li>
                  <li><a href="#about"  variant='primary' style={{ fontFamily:"Open Sans"}}
            onClick={()=> this.setState({addModalShow: true})} >S'inscrire</a></li>
                  <AddModel
            show={this.state.addModalShow}
            onHide={addModalClose}
            />
               
                </ul>
              
              </nav>
            </div>
          </header>




        ) 
    } 
    
}
export default HeaderConnect ;