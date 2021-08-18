import {put, takeLatest} from 'redux-saga/effects';

import {
    setDialogLSuccess,
    setDialogLFailure,
    setUsersLRequest,
    setDialogLRequest,
    setUsersLFailure, setUsersLSuccess
} from './LessonDialogs_actions';
import {ldialogsAPI} from '../../api/api';

function* LessonUsersSaga({payload}) {
    try {
        const response = yield ldialogsAPI.getUsers({id: payload});
        if (response.status >= 200 && response.status < 400) {
            const data = yield response.json();
            yield put(setUsersLSuccess(data));
        }
    } catch (e) {
        console.log(e);
        yield put(setUsersLFailure('Something is wrong'));
    }
}
function* LessonDialogSaga({payload}) {
    try {
        const response = yield ldialogsAPI.getDialog(payload);
        if (response.status >= 200 && response.status < 400) {
            const data = yield response.json();
            yield put(setDialogLSuccess(data[0]));
        }
    } catch (e) {
        console.log(e);
        yield put(setDialogLFailure('Something is wrong'));
    }
}

export default function* LessonDialogsWatcher() {
    yield takeLatest(setUsersLRequest,LessonUsersSaga)
    yield takeLatest(setDialogLRequest,LessonDialogSaga)
}