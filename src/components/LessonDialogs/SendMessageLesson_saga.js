import {put, takeLatest} from 'redux-saga/effects';

import {sendMessageSuccess, sendMessageFailure, sendMessageRequest} from './LessonDialogs_actions';
import {ldialogsAPI} from '../../api/api';


function* SendMessageLesson_saga({payload}) {
    try {
        const response = yield ldialogsAPI.sendMessage(payload);
        if (response.status >= 200 && response.status < 400) {
            const data = yield response.json();
            yield put(sendMessageSuccess(data));
        }
    } catch (e) {
        console.log(e);
        yield put(sendMessageFailure('Something is wrong'));
    }
}

export default function* SendMessageLessonWatcher() {
    yield takeLatest(sendMessageRequest,SendMessageLesson_saga)
}
