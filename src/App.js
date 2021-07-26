import React from "react";
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/Profile/profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import Users from "./components/users/users";
import Todo from "./components/todo/Todo";



const App = (p) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content style">
                    {/*<Route path='/messages' component={Dialogs}/>*/}
                    {/*<Route path='/profile' render={Profile}/>*/}
                    <Route path='/todo' render={() => <Todo />}/>
                    <Route path='/messages' render={() => <DialogsContainer />}/>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/users' render={ () => <Users />}/>
                </div>
            </div>
    )
}

export default App;
