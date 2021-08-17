import {put} from 'redux-saga/effects';

import {setUsersLSuccess, setUsersLFailure} from './LessonDialogs_actions';
import {ldialogsAPI} from '../../api/api';


export default function* LessonUsersSaga({payload}) {
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
