import {fork} from 'redux-saga/effects';
import LAuthWatcher from '../components/LessonDialogs/auth/LAuth_saga';
import SendMessageLessonWatcher from '../components/LessonDialogs/SendMessageLesson_saga';
import LessonDialogsWatcher from '../components/LessonDialogs/LessonDialog_saga';
import githubWatcher from '../components/githubLesson/git_saga';
import SerialsWatcher from '../components/lesson/Serials_saga';
import UsersWatcher from '../components/users/Users_saga';
import ProfileWatcher from '../components/Profile/profile_saga';


// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield fork(UsersWatcher)
    yield fork(SerialsWatcher)
    yield fork(githubWatcher)
    yield fork(LessonDialogsWatcher)
    yield fork(LAuthWatcher)
    yield fork(SendMessageLessonWatcher)
    yield fork(ProfileWatcher)
}