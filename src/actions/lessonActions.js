import { createActions } from 'redux-actions';

export const {
    searchRequest,
    searchSuccess,
    searchFailure,
    setSerials,
} = createActions({
    SERIALS_REQUEST:payload=>payload,
    SERIALS_SUCCESS:payload=>payload,
    SERIALS_FAILURE:payload=>payload,
    SET_SERIALS:payload=>payload
})