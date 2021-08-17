import {put} from 'redux-saga/effects';

import {    setUserDataLSuccess, setUserDataLFailure,} from './LAuth_actions';
import {ldialogsAPI} from '../../../api/api';


export default function* LAuth_saga({payload}) {
    try {
        const response = yield ldialogsAPI.getAuth(payload);
        if (response.status >= 200 && response.status < 400) {
            const data = yield response.json();
            yield put(setUserDataLSuccess(data));
        }
    } catch (e) {
        console.log(e);
        yield put(setUserDataLFailure('Something is wrong'));
    }
}