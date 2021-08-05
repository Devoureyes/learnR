import React from "react";
import './App.css';
import Navbar from "./components/navbar/navbar";
import Todo from "./components/todo/Todo";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from './components/login/Login';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return <div className="app-wrapper">
        <HeaderContainer />
        <Navbar/>
        <div className="content style">
            {/*<Route path='/messages' component={Dialogs}/>*/}
            {/*<Route path='/profile' render={Profile}/>*/}
            <Route path='/todo' render={() => <Todo/>}/>
            <Route path='/messages' render={() => <DialogsContainer/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <Login />}/>
            <img width="200px" src="skel.png" className="img1"  alt={''}/>
            <img width="200px" src="skel.png" className="img2" alt={''}/>
        </div>
    </div>
}

