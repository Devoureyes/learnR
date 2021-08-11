import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Todo from './components/todo/Todo';
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import Loader from './components/todo/Loader';
import Lesson from './components/lesson/Lesson';


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Loader type={2}/>
        } else {
            return <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="content style">
                    {/*<Route path='/messages' component={Dialogs}/>*/}
                    {/*<Route path='/profile' render={Profile}/>*/}
                    <Route path="/todo" render={() => <Todo/>}/>
                    <Route path="/messages" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                    <Route path="/lesson" render={() => <Lesson/>}/>
                    <img width="200px" src="skel.png" className="img1" alt={''}/>
                    <img width="200px" src="skel.png" className="img2" alt={''}/>
                </div>
            </div>;
        }
    }
}
const mstp = state => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mstp, {initializeApp}))(App)
