import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
// import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from './appReducer';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk";
import rootSaga from '../api/Sagas'
import {composeWithDevTools} from 'redux-devtools-extension';
import testReducer from './testReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: testReducer,
    authPage: authReducer,
    form: formReducer,
    app: appReducer
})

const sagaMiddleware = createSagaMiddleware();

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk,sagaMiddleware)));

sagaMiddleware.run(rootSaga)
window.store = store
export default store;