import React from "react";
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Todo from "./components/todo/Todo";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="content style">
            {/*<Route path='/messages' component={Dialogs}/>*/}
            {/*<Route path='/profile' render={Profile}/>*/}
            <Route path='/todo' render={() => <Todo/>}/>
            <Route path='/messages' render={() => <DialogsContainer/>}/>
            <Route path='/profile' render={() => <ProfileContainer />}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
        </div>
    </div>
}

