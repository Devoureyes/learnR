import {put, takeLatest} from 'redux-saga/effects';
import {setUserPhotoFailure, setUserPhotoRequest, setUserPhotoSuccess} from './profile_actions';
import {profileAPI} from '../../api/api';

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

export default function* ProfileWatcher() {
    yield takeLatest(setUserPhotoRequest,setUserPhoto_saga)
}