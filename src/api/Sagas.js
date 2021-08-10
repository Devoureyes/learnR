import {takeEvery, call, put} from 'redux-saga/effects';
import {FOLLOW,follow, UNFOLLOW,unfollow, toggleFollowingInProgress} from '../redux/usersReducer';
import {userAPI} from './api';


function* followSaga({userId}) {
    try {
        yield put(toggleFollowingInProgress(true, userId));
        const {data: {resultCode}} = yield call(userAPI.follow, userId);
        if (resultCode === 0) {
            yield put(toggleFollowingInProgress(false, userId));
        }
    } catch (e) {
        yield put(toggleFollowingInProgress(false, userId));
        yield put(unfollow(userId))
        console.log(e);
    }
}

function* unfollowSaga({userId}) {
    try {
        yield put(toggleFollowingInProgress(true, userId));
        const {data: {resultCode}} = yield call(userAPI.unFollow, userId);
        if (resultCode === 0) {
            yield put(toggleFollowingInProgress(false, userId));
        }
    } catch (e) {
        yield put(follow(userId))
        yield put(toggleFollowingInProgress(false, userId));
        console.log(e);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield takeEvery(FOLLOW, followSaga);
    yield takeEvery(UNFOLLOW, unfollowSaga);
}