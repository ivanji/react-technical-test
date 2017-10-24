export default function searchReducer(state = { celebrities:[], filteredCelebrities:[], countryList: [] }, action) {
    switch (action.type) {
        case 'FETCH_CELEBRITIES_SUCCESS':
            return {
                ...state, celebrities: action.data, filteredCelebrities: action.data, countryList: action.country
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
        default:
            return state;
    }
}