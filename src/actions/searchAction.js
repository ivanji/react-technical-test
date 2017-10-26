//<editor-fold desc="FetchCelebrities">
/*export function fetchCelebrities() {
    return function (dispatch) {
        fetch('./celebrityRichList.json')
            .then((response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                response.json().then(data => {
                    dispatch(fetchCelebritiesSuccess(data))
                })
            });

    }
}*/

export function fetchCelebrities() {
    return function (dispatch) {
        fetch('./celebrityRichList.json')
            .then((response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                response.json().then(data => {
                    dispatch(fetchCelebritiesSuccess(data));
                    fetch('http://api.fixer.io/latest?base=USD&symbols=GBP,EUR,AUD')
                        .then((response) => {
                            response.json().then(rates => {
                                console.log(rates.rates);
                                const actualRates = rates.rates;
                                console.warn(actualRates);
                                console.dir(actualRates);

                                let ratesList = [], rateObj = {};
                                for (var key in actualRates) {
                                    rateObj = {};
                                    if (actualRates.hasOwnProperty(key)) {
                                        rateObj.name = key;
                                        rateObj.value= actualRates[key];

                                        ratesList.push(rateObj);
                                    }
                                }
                                console.log(ratesList);
                                dispatch(fetchRateSuccess(rates));
                            })
                        })
                })
            });
    }
}

export function fetchRateSuccess(rates) {
    return {
        type: 'FETCH_RATE_SUCCESS',
        baseCurrency: rates.base, //defining base currency directly from the API response
        currency: rates.rates
    }
}

export function fetchCelebritiesSuccess(data) {
    // Let's immediately populate the Birthplace drop-down list using the received data
    let countryList = data.celebrityList.reduce(function (countryList, celebrity) {
        // Creating an array of unique countries by comparing celebrity's countries
        // with the values in the new array
        if (countryList.includes(celebrity.country)) {
            // TODO: Fix this abomination
            //return celebrity.country;
        } else {
            // if country doesn't exist in the new array, let's include it
            // and then return the new array for iteration
            countryList.push(celebrity.country);
            return countryList;
        }
        return countryList; //must return new array in case condition is true
    }, []);



    return {
        type: 'FETCH_CELEBRITIES_SUCCESS',
            data: data.celebrityList,
            country: countryList
    }
}

//</editor-fold>

//<editor-fold desc="FilterByCountry">
export function filterByCountry(country) {
    return function (dispatch, getState) {
        let filteredCelebrities = getState().searchReducer.celebrities.filter(function (celebrity) {
            return (
                celebrity.country.toLowerCase().indexOf(country.toLowerCase()) !== -1
            )

        });
        dispatch(filterCelebrities(filteredCelebrities));
    }
}

export function filterCelebrities(filteredCelebrities) {
    return {
        type: 'FILTER_BY_COUNTRY', filteredCelebrities
    }
}


// </editor-fold>

//<editor-fold desc="Reset View">
export function resetCelebrities() {
    return function (dispatch, getState) {
        let originalList = getState().searchReducer.celebrities;
        dispatch(resetView(originalList));
    };
}

export function resetView(originalList) {
    return {
        type: 'FILTER_BY_COUNTRY', filteredCelebrities: originalList
    }
}

//</editor-fold>

//<editor-fold desc="Search Filter">
export function searchCelebrities(value) {
    return function (dispatch, getState) {
        //TODO: find out how to filter out celebrities based on selected country's celebrities and revert back as user types
        let results = getState().searchReducer.celebrities.filter(function (celebrity) {
            return (
                celebrity.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                celebrity.age.toString().indexOf(value) !== -1 ||
                celebrity.netWorth.toString().indexOf(value) !== -1
            )
        });
        dispatch(searchList(results));
    }
}

export function searchList(results) {
    return {
        type: 'SEARCH_LIST', filteredCelebrities: results
    }
}

//</editor-fold>

//<editor-fold desc="FX Conversion">
export function fxConversion(value) {
    return function(dispatch, getState) {
        let selectedCurrency = getState().searchReducer.filteredCelebrities.map(celebrity => {
            //console.log(celebrity.netWorth);
            celebrity.netWorth = celebrity.netWorth * value;
            return celebrity;// Multiply original netWorth with value specified for each currency
        });
        dispatch(updateNetworth(selectedCurrency));
    }
}

export function updateNetworth(selectedCurrency) {
    return {
        type: 'UPDATE_NETWORTH', selectedCurrency
    }
}
//</editor-fold>