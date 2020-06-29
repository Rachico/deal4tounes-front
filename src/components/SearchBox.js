import React from 'react';
import 'tachyons' ;

function SearchBox({searchfield, searchChange}) {
    return (
      
<<<<<<< HEAD
                <div className='pa4 '>
            <input 
            
            className='pa3 ba b--green '
=======
        <div className='pa4 '>
            <input 
            className='pa3 ba b--green '
              
>>>>>>> dev
                type='search' 
                placeholder='rechercher ici '
                onChange ={searchChange}
            />
        </div>
        
    );
  }
  
  export default SearchBox;