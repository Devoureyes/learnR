import {createActions} from 'redux-actions';

export const {
    setUserPhotoRequest,
    setUserPhotoSuccess,
    setUserPhotoFailure,
} = createActions({
    SET_USER_PHOTO_REQUEST:payload=>payload,
    SET_USER_PHOTO_SUCCESS:payload=>payload,
    SET_USER_PHOTO_FAILURE:payload=>payload,
})