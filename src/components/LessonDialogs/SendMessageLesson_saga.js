import {put} from 'redux-saga/effects';

import {sendMessageSuccess, sendMessageFailure} from './LessonDialogs_actions';
import {ldialogsAPI} from '../../api/api';


export default function* SendMessageLesson_saga(payload) {
    try {
        const response = yield ldialogsAPI.getDialog(payload);
        if (response.status >= 200 && response.status < 400) {
            const data = yield response.json();
            yield put(sendMessageSuccess(data));
        }
    } catch (e) {
        console.log(e);
        yield put(sendMessageFailure('Something is wrong'));
    }
}
