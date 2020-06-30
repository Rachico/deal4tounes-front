import React from 'react';





function Offer({title, price, id, description ,image}) {

    return(
        
      
        <div class="product-grid4">        
              <div class="hovereffect">
                  <img alt ='' class="img-responsive" style={{height:"100%",width:"100%"}}src={image}  />                    
                  <div class="overlay">
                      <h2>{title}</h2>
                      <a class="info" href="#">{description}</a>
                    </div>
                </div>
                      <div class="prices">{price} points</div>   

                <a class="add-to-cart" href="">Acheter</a>
                 
                 
                
    
                
    
    
        </div>


    );
  }
  
  export default Offer;
