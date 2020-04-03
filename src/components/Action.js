import React from 'react';


function Action({title, body}) {
    return(
        <div className='row flex tc bg-light dib br3 pa3 ma4 grow bw shadow-1'>
            

            <div class='row'>
            <div class='col-4 pa4'>
                
                <img alt ='action_image' src={`https://www.dupaco.com/wp-content/uploads/2020/04/money-in-members-pockets-icon-100x100-1.png`}/>
            </div>
            <div class='col-8'>
                <h1>{title}</h1>
                <p>{body}</p>  
                </div> 
            </div>
        
        </div>
    );
  }
  
  export default Action;