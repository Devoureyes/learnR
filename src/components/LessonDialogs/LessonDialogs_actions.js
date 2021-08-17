import {createActions} from 'redux-actions';


export const {
    setUsersLRequest,
    setUsersLSuccess,
    setUsersLFailure,
} = createActions({
    SET_USERS_L_REQUEST: payload=>payload,
    SET_USERS_L_SUCCESS: payload=>payload,
    SET_USERS_L_FAILURE: payload=>payload,
})