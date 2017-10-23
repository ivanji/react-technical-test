import React from  'react';
import Country from './Country'

const Birthplace = (props) => {
    return(
        <select onChange={props.onChange}>
            <option value="reset">Show all</option>
            {
                props.countryList.sort(function(a, b) {
                    return (a < b) ? -1 : (a > b) ? 1 : 0;
                }).map(function(country) {
                    return <Country key={country} name={country}/>
                })
            }
        </select>
    )
};
export default Birthplace;