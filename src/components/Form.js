import React from 'react';
import Search from './Search';
import Birthplace from './CountryDropdown';

const Form = (props)=> {
    return(
        <form>
            <div className="row">
                <div className="input-group">
                    <label>Birthplace: </label>
                    <Birthplace countryList={props.countryList}
                                onChange={props.onChange}
                    />
                </div>
                <div className="input-group">

                    {console.log(props)}

                    <label htmlFor="">Currency Converter</label>
                    <select onChange={props.fxConversion}>
                        <option value={props.currencyValues}>US Dollar</option>
                        <option value="0.75">Euro</option>
                        <option value="1.11">Australian Dollar</option>
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