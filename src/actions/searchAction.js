export function searchList (celebrity) {
    return {
        type: 'SEARCH_LIST', celebrity
    }
}
/*
export function fetchCelebrities (celebrity) {
    return dispatch => {
        fetch('./celebrityRichList.json')
            .then((response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                response.json().then(data => {
                   return dispatch({
                        type: 'FETCH_CELEBRITIES', data: data.celebrityList
                    })
                })
            })
    }

}*/

export function fetchCelebritiesSuccess(data) {
    return {
        type: 'FETCH_CELEBRITIES_SUCCESS', data: data.celebrityList
    }
}


export function fetchCelebrities() {
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
            })
    }
}
