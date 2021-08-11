import { createActions } from 'redux-actions';

export const {
    searchRequest,
    searchSuccess,
    searchFailure,
    oneSerialRequest,
    oneSerialSuccess,
    oneSerialFailure,
} = createActions({
    SEARCH_REQUEST:payload=>payload,
    SEARCH_SUCCESS:payload=>payload,
    SEARCH_FAILURE:payload=>payload,
    ONE_SERIAL_REQUEST:payload=>payload,
    ONE_SERIAL_SUCCESS:payload=>payload,
    ONE_SERIAL_FAILURE:payload=>payload,
})