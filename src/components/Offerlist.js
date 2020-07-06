import React, { Component } from 'react';
import Offer from "./Offer";





class OfferList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
       
      }

    render(){
        return(        
            <div className="d-flex flex-col">
                
        
                <div className="row">
                
        
                   {
                        this.props.offers.map((user, i) => {
                           return  (     
                                   
                               <div className="col-md-4 mx-0 my-3">
       
                              <Offer                             
       
                                   key={this.props.offers[i].id} 
                                   id={this.props.offers[i].id} 
                                   title={this.props.offers[i].title} 
                                   price={this.props.offers[i].price} 
                                   description={this.props.offers[i].description}
                                   image={this.props.offers[i].image}
                               /> 
                            </div>
                           );
                       })
                   }
                </div>
            </div>
               
           );
    }

}
  
  export default OfferList;




