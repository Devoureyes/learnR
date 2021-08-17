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
import serialsReducer from '../components/lesson/serialsReducer';
import github_reducer from '../components/githubLesson/github_reducer';
import auth_reducer from '../components/githubLesson/login/auth_reducer';
import user_reducer from '../components/githubLesson/User/user_reducer';
import LessonDialogs_reducer from '../components/LessonDialogs/LessonDialogs_reducer';
import LAuth_reducer from '../components/LessonDialogs/auth/LAuth_reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: testReducer,
    authPage: authReducer,
    form: formReducer,
    app: appReducer,
    serialsPage: serialsReducer,
    github_reducer,
    auth_reducer,
    user_reducer,
    LessonDialogs_reducer,
    LAuth_reducer,
})

const sagaMiddleware = createSagaMiddleware();

let store = createStore(reducers,
    composeWithDevTools(applyMiddleware(thunk,sagaMiddleware)));

sagaMiddleware.run(rootSaga)
window.store = store
export default store;