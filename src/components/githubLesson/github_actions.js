import {createActions} from 'redux-actions';


export const {
    setUserRequest,
    setUserSuccess
} = createActions({
    SET_USER_REQUEST:payload=>payload,
    SET_USER_SUCCESS:payload=>payload,
})