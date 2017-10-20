export default function searchReducer(state = { celebrities:[] }, action) {
    switch (action.type) {
        /*case 'SEARCH_LIST':
            return [...state,
                Object.assign({}, action.celebrity)
            ];*/
        case 'FILTER_BY_COUNTRY':
            return state.celebrities.reduce(function (country, state) {
                if (country.includes(state.celebrity.country)) {
                    state.celebrities.country
                } else {
                    country.push(state.country)
                }
                return country;
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