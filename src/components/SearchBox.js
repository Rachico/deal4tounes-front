import React from 'react';


function SearchBox({searchfield, searchChange}) {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--green bg-light-gray'
                type='search' 
                placeholder='rechercher une action'
                onChange ={searchChange}
            />
        </div>
    );
  }
  
  export default SearchBox;