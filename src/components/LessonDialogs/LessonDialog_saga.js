import {put} from 'redux-saga/effects';

import {setDialogLSuccess, setDialogLFailure} from './LessonDialogs_actions';
import {ldialogsAPI} from '../../api/api';


export default function* LessonDialogSaga({payload}) {
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
