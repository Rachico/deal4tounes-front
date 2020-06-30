import React from 'react';
import 'tachyons' ;

function SearchBox({searchfield, searchChange}) {
    return (
      
        <div className='pa4 '>
            <input 
            className='pa3 ba b--green '
              
                type='search' 
                placeholder='rechercher ici '
                onChange ={searchChange}
            />
        </div>
        
    );
  }
  
  export default SearchBox;