export default function searchReducer(state = { celebrities:[] }, action) {
    switch (action.type) {
        /*case 'SEARCH_LIST':
            return [...state,
                Object.assign({}, action.celebrity)
            ];*/
        case 'FETCH_CELEBRITIES_SUCCESS':
            // return action.data;
            return (
                Object.assign({}, ...state, { celebrities: action.data})
            );
        default:
            return state;
    }
}