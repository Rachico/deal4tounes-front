import React from 'react';


function SearchBox({searchfield, searchChange}) {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--black bg-white'
                type='search' 
                placeholder='rechercher une action'
                onChange ={searchChange}
            />
        </div>
    );
  }
  
  export default SearchBox;