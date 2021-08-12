import {createActions} from 'redux-actions';


export const {
    authorize,
    logout,
    getIsAuthorized,
} = createActions({
    AUTHORIZE:payload=>payload,
    LOGOUT:payload=>payload,
    GET_IS_AUTHORIZED:payload=>payload,
})