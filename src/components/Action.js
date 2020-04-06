import React from 'react';


function Action({title, body, id}) {
    return(
        <div className='row flex tc bg-light dib br3 pa3 ma5 grow bw shadow-1 '>
            

            <div class='row'>
            <div class='col-4 img-responsive'>
                
                <img alt ='action_image' style={{height:"200px",width:"200px"}}src={`https://flathash.com/${id}`}/>
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