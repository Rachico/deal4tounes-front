import React , { Component } from 'react';
import Offerlist from './Offerlist';
import Offer from "./Offer";
import { data } from 'jquery';
import '../css/style.css' ;
import '../css/style.css' ;







class OffersContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offers : [] 
            
        }
    }

    componentDidMount(){
        fetch("http://localhost:8000/api/offer")
            .then(res => res.json())
            .then(data => this.setState({offers: data}))
        }
  
    

    render(){ const { offers} = this.state;
        

        return (        
        <div className="container">

              <div id="offer">
                
                
                     <div className='tc pv5' style={{fontFamily:"Open Sans",color:"black"}}>
                           <h2 className='f1' style={{fontFamily:"Open Sans",color:"black"}}>Nos offres</h2>
                           <h3 style={{ fontFamily:"Open Sans"}}>Obtenez un bon d'achat avec les points que vous avez accumulés.</h3>

                    
                              
                                    
                                        <Offerlist offers={offers} /> 
                                    
                               
 
                   
                       
                    </div>
                        
            </div>
        </div>
                        
                    
                
            );

       
        

     
    } 
}
  
export default OffersContainer;