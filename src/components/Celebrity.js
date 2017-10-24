import React from 'react';

const Celebrity = (props) => {
    return(
        <div className="celebrity">
            <h3>No: {props.rank}</h3>
            <h4>{props.name}</h4>
            <h4>Networth: {props.currency}</h4>
            <p>Age: {props.age}</p>
            <p>
                Country of Birth: {props.country}
            </p>
        </div>
    )
};

export default Celebrity;