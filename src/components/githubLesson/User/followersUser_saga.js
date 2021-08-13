import {put} from 'redux-saga/effects';
import {setFollowersFailure,setFollowersSuccess} from './user_actions';
import {githubAPI} from '../../../api/api';

export default function*  followersUserSaga(payload) {
    try {
        const response = yield githubAPI.getUserFollowers(payload)
        if (response.status >= 200 && response.status < 400) {
            yield put(setFollowersSuccess(response.data))
        }
    } catch (e) {
        yield put(setFollowersFailure({userSearch:payload,error:'User not found'}))
        console.log(e)
    }
}
