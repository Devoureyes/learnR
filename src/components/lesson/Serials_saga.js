import {lessonAPI} from '../../api/api';
import {put, takeEvery} from 'redux-saga/effects';
import {
    oneSerialFailure, oneSerialRequest,
    oneSerialSuccess,
    searchFailure,
    searchRequest,
    searchSuccess
} from '../../actions/lessonActions';


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

export default function* SerialsWatcher() {
    yield takeEvery(searchRequest,serialsSaga)
    yield takeEvery(oneSerialRequest,getSerialSaga)
}