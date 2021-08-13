import {put, fork} from 'redux-saga/effects';

import {setUserFailure, setUserSuccess} from './github_actions';
import {githubAPI} from '../../api/api';
import followersUserSaga from './User/followersUser_saga';

export default function*  githubSaga({payload}) {
    try {
        const response = yield githubAPI.getUserInformation(payload)
        yield fork(followersUserSaga,payload)
        if (response.status >= 200 && response.status < 400) {
            yield put(setUserSuccess(response.data))
        } else {
            yield put(setUserFailure({userSearch:payload,error:'User not found'}))
        }
    } catch (e) {
        yield put(setUserFailure({userSearch:payload,error:'User not found'}))
        console.log(e)
    }
}