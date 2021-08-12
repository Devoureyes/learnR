import {take, put, call, select} from 'redux-saga/effects';
import {authorize, logout} from './auth_actions';
//import { authorize, logout, getIsAuthorized } from 'ducks/auth'
import {
    getTokenFromLocalStorage,
    setTokenToLocalStorage,
    removeTokenFromLocalStorage
} from './localStorage';
import {clearTokenApi, setTokenApi} from '../../../api/api';
import {getIsAuthorized} from './auth_reducer';


export default function* authGitSaga() {
    const isAuthorized = yield select(getIsAuthorized); /* boolean */
    const localStorageToken = yield call(getTokenFromLocalStorage);

    let token;

    if (!isAuthorized && localStorageToken) {
        token = localStorageToken;
        yield put(authorize());
    } else {
        const action = yield take(authorize);
        token = action.payload;
    }
    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);

    yield take(logout);

    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
}


