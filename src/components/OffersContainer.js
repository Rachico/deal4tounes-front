import React , { Component } from 'react';
import OfferList from './OfferList';
import faker from 'faker';
import Offer from './Offer';
import { data } from 'jquery';
import '../css/style.css' ;
import '../css/style.css' ;
import { Row, Col, Grid } from 'react-bootstrap';






class OffersContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offers : [] 
            
        }
    }

    componentWillMount(){
        fetch("http://localhost:4000/products")
            .then(res => res.json())
            .then(data => this.setState({offers: data}))
        }
  
    

    render(){ const { offers} = this.state;
        

        return (        
        <div className="container">

              <div id="offer">
                
                
                     <div className='tc pv5' style={{fontFamily:"Open Sans",color:"black"}}>
                           <h1 className='f1' style={{fontFamily:"Open Sans",color:"black"}}>Nos offres</h1>
                    
                              
                                    
                                        <OfferList offers={offers} /> 
                                    
                               
 
                   
                       
                    </div>
                        
            </div>
        </div>
                        
                    
                
            );

       
        

     
    } 
}
  
export default OffersContainer;
    
   
