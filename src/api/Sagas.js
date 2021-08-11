import {takeEvery, call, put} from 'redux-saga/effects';
import {
    follow,
    unfollow,
    toggleIsFollowingProgress,
    toggleIsFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    setUsersRequest
} from '../actions/usersPageActions';
import {lessonAPI, userAPI} from './api';
import {
    oneSerialFailure,
    oneSerialRequest,
    oneSerialSuccess,
    searchFailure,
    searchRequest,
    searchSuccess
} from '../actions/lessonActions';


function* followSaga({payload:userId}) {
    try {
        yield put(toggleIsFollowingProgress({isFetching:true, userId:userId}));
        const {data: {resultCode}} = yield call(userAPI.follow, userId);
        if (resultCode === 0) {
            yield put(toggleIsFollowingProgress({isFetching:false, userId:userId}));
        }
    } catch (e) {
        console.log(e);
    }
}

function* unfollowSaga({payload:userId}) {
    try {
        yield put(toggleIsFollowingProgress({isFetching:true, userId:userId}));
        const {data: {resultCode}} = yield call(userAPI.unFollow, userId);
        if (resultCode === 0) {
            yield put(toggleIsFollowingProgress({isFetching:false, userId:userId}));
        }
    } catch (e) {
        console.log(e);
    }
}
function* setUsersSaga({payload: {currentPage,pageSize}}) {
    try {
        yield put(toggleIsFetching(true))
        const response = yield userAPI.getUsers(currentPage,pageSize)
        if(response.status === 200) {
            yield put(setUsers(response.data.items))
            yield put(setCurrentPage(currentPage))
            yield put(toggleIsFetching(false))
            yield put(setTotalUsersCount(response.data.totalCount))
        }
    } catch (e) {
        yield put(toggleIsFetching(true))
        console.log(e);
    }
}
function* serialsSaga({payload}) {
    try {
        const response = yield lessonAPI.search(payload);
        yield put(searchSuccess(response))
    } catch (e) {
        yield put(searchFailure('Something is wrong'))
        console.log(e)
    }
}
function* getSerialSaga({payload}) {
    try {
        const response = yield lessonAPI.show(payload);
        yield put(oneSerialSuccess(response))
    } catch (e) {
        yield put(oneSerialFailure('Something is wrong'))
        console.log(e)
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield takeEvery(setUsersRequest,setUsersSaga)
    yield takeEvery(follow, followSaga);
    yield takeEvery(unfollow, unfollowSaga);
    yield takeEvery(searchRequest,serialsSaga)
    yield takeEvery(oneSerialRequest,getSerialSaga)
}