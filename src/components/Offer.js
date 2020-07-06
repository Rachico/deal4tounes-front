import React, { Component } from 'react';
import axios from 'axios';



class Offer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
       
      }

      refreshPage() {
        window.location.reload(false);
      }

      
      handleTransaction(offer_id){
        axios.patch(`http://localhost:8000/api/client/${localStorage.getItem('user_id')}/${offer_id}`,{
    
        }).then(response =>{
            console.log(response);
           //alert('Offre achetée !');
        });
    }

  render(){
    return(
        
      
        <div class="product-grid4">        
              <div class="hovereffect">
                  <img alt ='' class="img-responsive" style={{height:"100%",width:"100%"}}src={this.props.image}  />                    
                  <div class="overlay">
                      <h2>{this.props.title}</h2>
                      <a class="info" href="#">{this.props.description}</a>
                    </div>
                </div>
                      <div class="prices">{this.props.price} points</div>   

                <button class="add-to-cart" onClick={this.handleTransaction(this.props.id)}>Acheter</button>
                 
                 
                
    
                
    
    
        </div>


    );
  }
  }
  
  export default Offer;
