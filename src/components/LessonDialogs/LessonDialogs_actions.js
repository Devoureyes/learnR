import {createActions} from 'redux-actions';


export const {
    setDialogsRequest,
    setDialogsSuccess,
    setDialogsFailure,
} = createActions({
    SET_DIALOGS_REQUEST: payload=>payload,
    SET_DIALOGS_SUCCESS: payload=>payload,
    SET_DIALOGS_FAILURE: payload=>payload,
})