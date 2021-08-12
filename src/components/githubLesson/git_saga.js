import {put} from 'redux-saga/effects';

import {setUserSuccess} from './github_actions';
import {githubAPI} from '../../api/api';

export default function*  githubSaga({payload}) {
    try {
        const response = yield githubAPI.getUserInformation(payload)
        if (response.status >= 200 && response.status < 400) {
            yield put(setUserSuccess(response.data))
        }
    } catch (e) {
        console.log(e)
    }
}