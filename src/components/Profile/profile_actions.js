import {createActions} from 'redux-actions';

export const {
    setUserPhotoRequest,
    setUserPhotoSuccess,
    setUserPhotoFailure,
    saveProfileRequest,
    saveProfileSuccess,
    saveProfileFailure,
} = createActions({
    SET_USER_PHOTO_REQUEST:payload=>payload,
    SET_USER_PHOTO_SUCCESS:payload=>payload,
    SET_USER_PHOTO_FAILURE:payload=>payload,
    SAVE_PROFILE_REQUEST:payload=>payload,
    SAVE_PROFILE_SUCCESS:payload=>payload,
    SAVE_PROFILE_FAILURE:payload=>payload,
})