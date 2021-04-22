import React from "react";
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Dialogs from "./components/dialogs/dialogs";
import s from "./components/Profile/profile.module.css";
import Profile from "./components/Profile/profile";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content style">
                    <Route path='/messages' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    {/*<Dialogs />*/}
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;