export default function searchReducer(state = { celebrities:[], filteredCelebrities:[], countryList: [] }, action) {
    switch (action.type) {
        case 'FETCH_CELEBRITIES_SUCCESS':
            return (
                Object.assign({}, ...state, { celebrities: action.data, filteredCelebrities: action.data, countryList: action.country})
            );
        case 'FILTER_BY_COUNTRY':
            console.log(action);
            return {
                ...state, filteredCelebrities: action.filteredCelebrities
            };
        case 'RESET_CELEBRITIES':
            console.log("Resetting: " + action);
            return {
                ...state, filteredCelebrities: action.filteredCelebrities
            };
        case 'SEARCH_LIST':
            console.log(action);
            return {
                ...state, filteredCelebrities: action.filteredCelebrities
            };
        default:
            return state;
    }
}