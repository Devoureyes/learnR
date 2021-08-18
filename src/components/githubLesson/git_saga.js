import {put, takeEvery, takeLatest} from 'redux-saga/effects';

import {setUserFailure, setUserRequest, setUserSuccess} from './github_actions';
import {githubAPI} from '../../api/api';
import {authorize} from './login/auth_actions';
import authGitSaga from './login/authGitSaga';
import {setFollowersFailure, setFollowersRequest, setFollowersSuccess} from './User/user_actions';

function*  githubSaga({payload}) {
    try {
        const response = yield githubAPI.getUserInformation(payload)
        if (response.status >= 200 && response.status < 400) {
            yield put(setUserSuccess(response.data))
        } else {
            yield put(setUserFailure('User not found'))
        }
    } catch (e) {
        console.log(e)
        yield put(setUserFailure('Something is wrong on network'))
    }
}

function*  followersUserSaga({payload}) {
    const {
        login,page,per_page
    } = payload
    try {
        const response = yield githubAPI.getUserFollowers(login,page,per_page)
        if (response.status >= 200 && response.status < 400) {
            let payload = {
                followersUser: response.data,
                page:page,
                per_page: per_page}
            yield put(setFollowersSuccess(payload))
        }
    } catch (e) {
        yield put(setFollowersFailure({userSearch:payload.login,error:'User not found'}))
    }
}

export default function*  githubWatcher() {
    yield takeEvery(setUserRequest,githubSaga)
    yield takeLatest(authorize,authGitSaga)
    yield takeEvery(setFollowersRequest,followersUserSaga)
}
