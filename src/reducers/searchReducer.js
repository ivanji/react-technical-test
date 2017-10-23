export default function searchReducer(state = { celebrities:[] }, action) {
    switch (action.type) {
        /*case 'SEARCH_LIST':
            return [...state,
                Object.assign({}, action.celebrity)
            ];*/
        case 'FILTER_BY_COUNTRY':
             return state.celebrities.reduce(function (countryList, celebrity) {
                // Creating an array of unique countries by comparing celebrity's countries
                // with the values in the new array
                if ( countryList.includes(celebrity.country) ) {
                   //return celebrity.country;
                } else {
                    // if country doesn't exist in the new array, let's include it
                    // and then return the new array for iteration
                    countryList.push(celebrity.country);
                    return countryList;
                }
                return countryList; //must return new array in case condition is true
            }, []);



        case 'FETCH_CELEBRITIES_SUCCESS':
            // return action.data;
            return (
                Object.assign({}, ...state, { celebrities: action.data})
            );
        default:
            return state;
    }
}