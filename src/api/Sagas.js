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
import {userAPI} from './api';


function* followSaga({payload:userId}) {
    try {
        /*yield put(toggleFollowingInProgress(true, userId));*/
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
// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield takeEvery(setUsersRequest,setUsersSaga)
    yield takeEvery(follow, followSaga);
    yield takeEvery(unfollow, unfollowSaga);
}