import {put, takeLatest} from 'redux-saga/effects';
import {
    saveProfileFailure,
    saveProfileRequest, saveProfileSuccess,
    setUserPhotoFailure,
    setUserPhotoRequest,
    setUserPhotoSuccess
} from './profile_actions';
import {profileAPI} from '../../api/api';
import {stopSubmit} from "redux-form";

function* setUserPhoto_saga({payload}) {
    try {
        const response = yield profileAPI.setUserPhoto(payload)
        if(response.status >= 200 && response.status < 400) {
            yield put(setUserPhotoSuccess(response.data.data.photos))
        }
    } catch (e) {
        console.log(e)
        yield put(setUserPhotoFailure)
    }
}
function* saveProfile_saga({payload}) {
    try {
        const response = yield profileAPI.saveProfile(payload)
        if(response.data.resultCode === 0 && response.status >= 200 && response.status < 400) {
            const data = yield profileAPI.getProfile(payload.userId)
            if(response.status >= 200 && response.status < 400) {
                yield put(saveProfileSuccess(data))
            }
        } else {
            yield put(saveProfileFailure(response.data.messages[0]))
            //yield put(stopSubmit("editProfile",{"contacts":{"facebook":response.data.messages[0]}}))
        }
    } catch (e) {
        console.log(e)
        yield put(saveProfileFailure(e))
    }
}
export default function* ProfileWatcher() {
    yield takeLatest(setUserPhotoRequest,setUserPhoto_saga)
    yield takeLatest(saveProfileRequest,saveProfile_saga)
}