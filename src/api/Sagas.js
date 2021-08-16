import {takeEvery, call, put, takeLatest} from 'redux-saga/effects';
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

import authGitSaga from '../components/githubLesson/login/authGitSaga';
import {authorize} from '../components/githubLesson/login/auth_actions';
import {setUserRequest} from '../components/githubLesson/github_actions';
import githubSaga from '../components/githubLesson/git_saga';
import {setFollowersRequest} from '../components/githubLesson/User/user_actions';
import followersUserSaga from '../components/githubLesson/User/followersUser_saga';
import {setDialogsRequest} from '../components/LessonDialogs/LessonDialogs_actions';
import LessonDialogsSaga from '../components/LessonDialogs/LessonDialogs_saga';

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

        if (response.status >= 200 && response.status < 400) {
            const responseJson = yield response.json()
            const shows = responseJson.map(({show}) => show)
            yield put(searchSuccess(shows))
        } else {
            yield put(searchFailure('Something is wrong'))
        }
    } catch (e) {
        yield put(searchFailure('Something is wrong'))
        console.log(e)
    }
}
function* getSerialSaga({payload}) {
    try {
        const response = yield lessonAPI.show(payload);
        if (response.status >= 200 && response.status < 400) {
            const responseJson = yield response.json()
            yield put(oneSerialSuccess(responseJson))
        } else {
            yield put(oneSerialFailure('Something is wrong'))
        }
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
    yield takeLatest(authorize,authGitSaga)
    yield takeEvery(setUserRequest,githubSaga)
    yield takeEvery(setFollowersRequest,followersUserSaga)
    yield takeEvery(setDialogsRequest,LessonDialogsSaga)
}