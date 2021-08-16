import {put} from 'redux-saga/effects';

import {setUserFailure, setUserSuccess} from './github_actions';
import {githubAPI} from '../../api/api';

export default function*  githubSaga({payload}) {
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