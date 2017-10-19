import React from 'react';
import Search from './Search';
import Birthplace from './CountryDropdown';

const Form = (props)=> {
    return(
        <form>
            <div className="row">
                <div className="input-group">
                    <label>Birthplace: </label>
                    <Birthplace country={props.country}
                                celebrities={props.celebrities}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="">Currency Converter</label>
                    <select onChange={props.currency}>
                        <option value="1">US Dollar</option>
                        <option value="0.75">Euro</option>
                        <option  value="1.11">Australian Dollar</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <Search search={props.search}/>

                <div className="input-group">
                    <label htmlFor="rank">Order By</label>
                    <select id="rank">
                        <option>Rank</option>
                    </select>
                </div>
            </div>
        </form>
    )
};

export default Form;