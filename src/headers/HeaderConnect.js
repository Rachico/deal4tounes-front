import React,{ Component } from 'react';
import AddModel from '../components/AddModel';
import '../css/style.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import ThePageOfArticles from '../Pages/ThePageOfArticles';
import Home2 from '../components/Home2' ; 
import '../App';
import axios from 'axios';
import {Redirect,BrowserRouter} from 'react-router-dom';
import store from 'store';
import createBrowserHistory from 'history/createBrowserHistory'


class HeaderConnect extends Component{

  constructor(){
    super();
    this.state ={
      deps:[], 
      addModalShow : false, 
      editModalShow : false,
      email:'',
      password:'',
      login:false ,
      store :null,
  
    }
    
}
refreshPage() {
  window.location.reload(false);
}

handleChange = input=> e => {
  this.setState({ 
    [input]: e.target.value 
  });
};


 handleSubmit = event => {
  console.log('done');
  event.preventDefault();

  axios.post(`http://127.0.0.1:8000/api/auth/login`, {   
      email: this.state.email,
      password : this.state.password,
  
      body: JSON.stringify(this.state),     
    
    }).then(response => { 
          
            
        this.setState({login:true})
        history.push('/about');
        this.refreshPage();
        store.set('login',true) ;
        store.set('store',response.data.access_token);

          }).catch(errors => {
            console.log(errors)
      });
}



    render(){
    let addModalClose =() => this.setState({addModalShow:false});
   
        return(
                  <header id="header">
             
            <div className="container-fluid">
        
              <div id="logo" className="pull-left">
              <h2><a href="#aboutus" className="scrollto" style={{ fontFamily:"Open Sans"}}>Deal4Tounes</a></h2>
              </div>
              <nav id="nav-menu-container">
                <ul className="nav-menu">
               
                  <li className="menu-active"><a href="#intro" style={{ fontFamily:"Open Sans"}}>Accueil</a></li>
                  <li><a href="#aboutus" style={{ fontFamily:"Open Sans"}}>Qui sommes-nous</a></li>
                 
                  <li><a href="#actions" style={{ fontFamily:"Open Sans"}}>Actions</a></li>
                  <li><a href="#offer" style={{ fontFamily:"Open Sans"}}>Offers</a></li>

                  
                
                  <li><a href="#contact" style={{ fontFamily:"Open Sans"}}>Contact</a></li>
                   <li className="dropdown-toggle" href="#contact" id="dropdownMenuLink" data-toggle="dropdown"aria-haspopup="true" aria-expanded="false"><a href="" style={{ fontFamily:"Open Sans"}}>Se connecter</a>
                    <ul>
                    
                      <div id="popover-content" className="hide" style={{width :'200px',width:"265px"}}>
                            <form 
                            style={{flexDirection: "column"}}
                            onSubmit={this.handleSubmit}
                            action="" 
                            method="post" 
                            role="form"
                            >
                            <div className="form-group">
                            <label htmlFor="exampleInputEmail1" style={{fontFamily:'Open Sans'}}><strong>email</strong></label>
                            <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            value={this.state.email} 
                            onChange={this.handleChange('email')}
                            />
                            </div>
                            <div className="form-group">
                            <label style={{fontFamily:'Open Sans'}}><strong>mot de passe</strong></label>
                              <input 
                              type="password" 
                              className="form-control" 
                              id="exampleInputPassword1"
                              value={this.state.password} 
                              onChange={this.handleChange('password')}
                              />
                              <a href="" style={{fontFamily:'arial', fontSize:'12px',textTransform:"lowercase",color:"black"}}>Mot de passe oublié ?</a>
                              </div>
                            <button type="submit" className="btn btn-outline-dark"style={{backgroundColor:"#18d26e"}}>Connexion</button>
                       </form>
                       </div>
                       </ul>
                      </li>
                  <li><a href="#about"  variant='primary' 
                          style={{ fontFamily:"Open Sans"}}
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
export default HeaderConnect;
export const history = createBrowserHistory();
