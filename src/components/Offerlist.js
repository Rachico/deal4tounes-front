import React from 'react';
import Offer from "./Offer";





function OfferList({ offers }) {
    
   

    return(        
     <div className="d-flex flex-col">
         
 
         <div className="row">
         
 
            {
                 offers.map((user, i) => {
                    return  (     
                            
                        <div className="col-md-4">

                       <Offer                             

                            key={offers[i].id} 
                            id={offers[i].id} 
                            title={offers[i].title} 
                            price={offers[i].price} 
                            description={offers[i].description}
                            image={offers[i].image}
                        /> 
                     </div>
                    );
                })
            }
         </div>
     </div>
        
    );

}
  
  export default OfferList;




