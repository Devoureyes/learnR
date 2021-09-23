import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Todo from './components/todo/Todo';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import Loader from './components/todo/Loader';
import LoginGit from './components/githubLesson/login/LoginGit';
import {withSuspense} from './components/hoc/withSuspense';
import LAuth from './components/LessonDialogs/auth/LAuth';
import NavbarTelephone from "./components/navbar/NavbarTelephone";

const Lesson = React.lazy(() => import('./components/lesson/Lesson'))
const ShowOneFilm = React.lazy(() => import('./components/lesson/ShowOneFilm'))
const GitHub = React.lazy(() => import('./components/githubLesson/github'))
const LessonDialogs = React.lazy(() => import('./components/LessonDialogs/LessonDialogs'))

const App = props => {
    useEffect(() => {
        const catchAllUnhandledError = (reason,promise) => {
            alert('promise= '+promise)
        }
        props.initializeApp()
        window.addEventListener('unhandledrejection',catchAllUnhandledError)
        return () => {
            window.removeEventListener('unhandledrejection',catchAllUnhandledError)
        }
    })

    if (!props.initialized) {
        return <Loader type={2}/>
    } else {
        return <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <NavbarTelephone/>
            <div className="content style">
                <Switch>
                    <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
                    <Route exact path="/todo" render={() => <Todo/>}/>
                    <Route path="/messages" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route exact path="/login" render={() => <Login/>}/>
                    <Route path="/loginGit" render={() => <LoginGit/>}/>
                    <Route path="/lesson" render={withSuspense(Lesson)}/>
                    <Route path="/github" render={withSuspense(GitHub)}/>
                    <Route path="/lessonDialogs" render={withSuspense(LessonDialogs)}/>
                    <Route path="/show/:id" render={withSuspense(ShowOneFilm)}/>
                    <Route path="/LAuth" render={() => <LAuth/>}/>
                    <Route path={'*'} render={() => <div style={{fontSize: '50px',padding: '5vh'}}>404 not found</div>}/>
                </Switch>
                <img width="200px" src="skel.png" className="img1" alt={''}/>
                <img width="200px" src="skel.png" className="img2" alt={''}/>
            </div>
        </div>;
    }
}

/*class App extends React.Component {
    catchAllUnhandledError = (promiseRejectionEvent) => {
        alert(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection',this.catchAllUnhandledError)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection',this.catchAllUnhandledError)
    }

    render() {
        if (!this.props.initialized) {
            return <Loader type={2}/>
        } else {
            return <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <NavbarTelephone/>
                <div className="content style">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
                        <Route exact path="/todo" render={() => <Todo/>}/>
                        <Route path="/messages" render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route exact path="/login" render={() => <Login/>}/>
                        <Route path="/loginGit" render={() => <LoginGit/>}/>
                        <Route path="/lesson" render={withSuspense(Lesson)}/>
                        <Route path="/github" render={withSuspense(GitHub)}/>
                        <Route path="/lessonDialogs" render={withSuspense(LessonDialogs)}/>
                        <Route path="/show/:id" render={withSuspense(ShowOneFilm)}/>
                        <Route path="/LAuth" render={() => <LAuth/>}/>
                        <Route path={'*'} render={() => <div style={{fontSize: '50px',padding: '5vh'}}>404 not found</div>}/>
                    </Switch>
                    <img width="200px" src="skel.png" className="img1" alt={''}/>
                    <img width="200px" src="skel.png" className="img2" alt={''}/>
                </div>
            </div>;
        }
    }
}*/

const mstp = state => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mstp, {initializeApp}))(App)
