import { createActions } from 'redux-actions';

export const {
    searchRequest,
    searchSuccess,
    searchFailure,
    setSerials,
} = createActions({
    SEARCH_REQUEST:payload=>payload,
    SEARCH_SUCCESS:payload=>payload,
    SEARCH_FAILURE:payload=>payload,
    SET_SERIALS:payload=>payload
})