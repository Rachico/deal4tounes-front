import React from 'react';
import Action from './Action';


function ActionList({ actions }) {
    
   

    return(
        <div>
            {
                 actions.map((user, i) => {
                    return  (
                        <Action 
                            key={actions[i].id} 
                            id={actions[i].id} 
                            title={actions[i].title} 
                            body={actions[i].body}
                        />
                    );
                })
            }
        </div>
    );

}
  
  export default ActionList;