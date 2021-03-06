import React from 'react';
import Networth from './Networth';

const Celebrity = (props) => {
    return(
        <div className="celebrity">
            <h3>No: {props.rank}</h3>
            <h4>{props.name}</h4>
            <h4>Networth: {props.netWorth}
            </h4>
            <p>Age: {props.age}</p>
            <p>
                Country of Birth: {props.country}
            </p>
        </div>
    )
};

export default Celebrity;