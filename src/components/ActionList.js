import React from 'react';
import Action from './Action';


function ActionList({ actions }) {
    
   

    return(
        <div>
            {
                 actions.map((user, i) => {
                    return  (
                        <Action 
                            
                            id={actions[i].id} 
                            title={actions[i].title} 
                            body={actions[i].body}
                            address={actions[i].address}
                        />
                    );
                })
            }
        </div>
    );

}
  
  export default ActionList;