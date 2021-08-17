import {createActions} from 'redux-actions';


export const {
    setUserDataLRequest,
    setUserDataLSuccess,
    setUserDataLFailure,
} = createActions({
    SET_USER_DATA_L_REQUEST: payload=>payload,
    SET_USER_DATA_L_SUCCESS: payload=>payload,
    SET_USER_DATA_L_FAILURE: payload=>payload
})