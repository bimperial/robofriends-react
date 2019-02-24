import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className='ma4'>
            <input className='pa2 br2 ba b--light-gray' type='search' placeholder='Search Robots' onChange={searchChange} />
        </div>
    )
}

export default SearchBox;