import React,{ Component } from 'react';
import '../css/style.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App';
import hello from '../img/hello.jpg';
import ocean from '../img/ocean.jpg';
import plastic from '../img/plastic.jpg';
import testimonial2 from '../img/testimonial2.jpg';
import $ from 'jquery';
import Axios from 'axios';

class EspacePersoHome extends Component{
  
  constructor() {
    super();
    this.state = {
        authUser :'',
        client:'',
        Name:'',
        
    }
   
  }

  getClientPoints(){
    Axios.get(`http://127.0.0.1:8000/api/auth/client/${localStorage.getItem('user_id')}`,{
         
      headers:{
          Authorization :`Bearer ${localStorage.getItem('store')}`
  
      }
      }).then(
        response =>{
          console.log(response);
          this.setState({client:response['data']['client_details'].points});
      
      })
  
  }

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

        

       Axios.get(`http://127.0.0.1:8000/api/auth/user`,{
         headers:{
          Authorization :`Bearer ${localStorage.getItem('store')}`
         }
        }).then(
          response =>{
            console.log(response);
            this.setState({authUser:response['data'].id});
            this.setState({Name:response['data'].name});
            localStorage.setItem('name',this.state.Name);
            localStorage.setItem('user_id',this.state.authUser);
            this.getClientPoints();
            //let name = localStorage.getItem('name');
        
        });
      
       
      
    
      console.log(this.state.authUser);    
     
    
}


    render(){

      const { client, Name } = this.state;
      //const points = this.getClientPoints();
      
        return(
            
            <div id="espace" class="section-bg wow fadeInUp">
            <div class="container">
            
            
            <div style={{padding:'40px'}}>
            <h1 class="hello" >Salut <strong>{Name}</strong>!</h1>
            <h1 class="hello">une belle journée pour changer le monde</h1>
            <center>
            <div style={{backgroundColor:'#13a456', height:'300px', width:'400px', borderRadius:'10px'}} class="mt-4">
              <p className="" style={{fontSize:'100px', color:'white', fontWeight:'bold',marginTop:'40px'}}>{client}</p>
            <h1 style={{color:'white',fontSize:'60px'}}>points</h1>
            </div>
            </center>
            </div>
            </div>
            </div>            
            
            )
        }
  }
  
    
    export default EspacePersoHome;