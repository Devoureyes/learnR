import {put} from 'redux-saga/effects';

import {setDialogsSuccess, setDialogsFailure} from './LessonDialogs_actions';
import {ldialogsAPI} from '../../api/api';


export default function* LessonDialogsSaga({payload}) {
    try {
        const response = yield ldialogsAPI.getPayload();
        if (response.status >= 200 && response.status < 400) {
            const data = yield response.json();
            console.log(data)
            yield put(setDialogsSuccess(data));
        }
    } catch (e) {
        console.log(e);
        yield put(setDialogsFailure('Something is wrong'));
    }
}