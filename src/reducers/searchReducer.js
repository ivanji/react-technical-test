export default function searchReducer(state = { celebrities:[], filteredCelebrities:[], countryList: [] }, action) {
    switch (action.type) {
        case 'FILTER_BY_COUNTRY':
            return {
                ...state, filteredCelebrities: action.filteredCelebrities
            };
        case 'FETCH_CELEBRITIES_SUCCESS':
            return (
                Object.assign({}, ...state, { celebrities: action.data, filteredCelebrities: action.data, countryList: action.country})
            );
        default:
            return state;
    }
}