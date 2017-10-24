import React from 'react';

const Search = (props) => {
    return(
        <div className="input-group">
            <label htmlFor="">Search:</label>
            <input type="text" onChange={props.search} placeholder="Search"/>
        </div>
    )
};

export default Search;