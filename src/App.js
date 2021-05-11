import React from "react";
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Dialogs from "./components/dialogs/dialogs";
import Profile from "./components/Profile/profile";
import {Route} from "react-router-dom";



const App = (p) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content style">
                    {/*<Route path='/messages' component={Dialogs}/>*/}
                    {/*<Route path='/profile' render={Profile}/>*/}

                    <Route path='/messages' render={() => <Dialogs state={p.state.messagesPage}/>}/>
                    <Route path='/profile' render={() => <Profile state={p.state.profilePage} dispatch={p.dispatch}/>}/>
                </div>
            </div>
    )
}

export default App;