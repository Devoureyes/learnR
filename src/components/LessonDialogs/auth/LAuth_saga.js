import {put, takeLatest} from 'redux-saga/effects';

import {setUserDataLSuccess, setUserDataLFailure, setUserDataLRequest} from './LAuth_actions';
import {ldialogsAPI} from '../../../api/api';


function* LAuth_saga({payload}) {
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

export default function* LAuthWatcher() {
    yield takeLatest(setUserDataLRequest,LAuth_saga)
}

// function* fetchFlow(api,successAction, failureAction, normalizeFn = a => a) {
//     try {
//         const response = yield call(api)
//         if(response.status >= 200 && response.status < 400) {
//             const data = yield response.json();
//             yield put(successAction)
//         }
//     } catch (e) {
//         console.log(e)
//         yield put(failureAction)
//     }
// }
//
// export function* fetchLessonWatcher() {
//     yield takeLatest('*', (action) => {
//         if(action.type.endWith('_REQUEST')) {
//             switch (action.type) {
//                 case [setUserDataLRequest]:
//                     fetchFlow(ldialogsAPI.getAuth,setUserDataLSuccess,setUserDataLFailure,(response) => response.payload);
//                     break;
//                 default:
//                     break;
//             }
//         }
//     })
// }