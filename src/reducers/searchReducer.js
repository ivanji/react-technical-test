export default function searchReducer(state = { celebrities:[], filteredCelebrities:[], countryList: [], currency: {}, baseCurrency: '', currencyValue:[] }, action) {
    switch (action.type) {
        case 'FETCH_CELEBRITIES_SUCCESS':
            return {
                ...state, celebrities: action.data,
                filteredCelebrities: action.data,
                countryList: action.country,
                currency: action.currency
            };
        case 'FILTER_BY_COUNTRY':
            return {
                ...state, filteredCelebrities: action.filteredCelebrities
            };
        case 'RESET_CELEBRITIES':
            return {
                ...state, filteredCelebrities: action.filteredCelebrities
            };
        case 'SEARCH_LIST':
            return {
                ...state, filteredCelebrities: action.filteredCelebrities
            };
        case 'UPDATE_NETWORTH':
            return {
                ...state, celebrities: action.selectedCurrency, filteredCelebrities: action.selectedCurrency
            };
        case 'FETCH_RATE_SUCCESS':
            return {
                ...state  , currency: action.currency, baseCurrency: action.baseCurrency
            };
        default:
            return state;
    }
}