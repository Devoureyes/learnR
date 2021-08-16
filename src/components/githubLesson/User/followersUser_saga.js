import {put} from 'redux-saga/effects';
import {setFollowersFailure,setFollowersSuccess} from './user_actions';
import {githubAPI} from '../../../api/api';

export default function*  followersUserSaga({payload}) {
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
