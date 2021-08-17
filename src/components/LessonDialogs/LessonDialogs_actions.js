import {createActions} from 'redux-actions';


export const {
    setUsersLRequest,
    setUsersLSuccess,
    setUsersLFailure,
    setDialogLRequest,
    setDialogLSuccess,
    setDialogLFailure,
} = createActions({
    SET_USERS_L_REQUEST: payload=>payload,
    SET_USERS_L_SUCCESS: payload=>payload,
    SET_USERS_L_FAILURE: payload=>payload,
    SET_DIALOG_L_REQUEST:payload=>payload,
    SET_DIALOG_L_SUCCESS:payload=>payload,
    SET_DIALOG_L_FAILURE:payload=>payload,
})