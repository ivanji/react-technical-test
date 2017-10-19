import React from 'react';

const Country = (props) => {

    return(
        <option value={props.name}>{props.name}</option>
    )
};

export default Country;