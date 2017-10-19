import React from  'react';
import Country from './Country'

const Birthplace = (props) => {
    return(
        <select onChange={props.country}>
            <option value="reset">Show all</option>
            {
                //TODO: Convert from Ternary Operator
                props.celebrities.reduce(function(country, celebrity) {
                    if (country.includes(celebrity.country)) { celebrity.country } else { country.push(celebrity.country)}
                    return country;
                },[]).sort(function(a, b) {
                    return (a < b) ? -1 : (a > b) ? 1 : 0;
                }).map(function(country) {
                    return <Country key={country} name={country}/>
                })
            }
        </select>
    )
};
export default Birthplace;