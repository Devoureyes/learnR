import {createActions} from 'redux-actions';


export const {
    setUserRequest,
    setUserSuccess,
    setUserFailure,
} = createActions({
    SET_USER_REQUEST:payload=>payload,
    SET_USER_SUCCESS:payload=>payload,
    SET_USER_FAILURE:payload=>payload,
})