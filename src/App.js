import React from "react";
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Dialogs from "./components/dialogs/dialogs";
import Profile from "./components/Profile/profile";
import {BrowserRouter, Route} from "react-router-dom";



const App = (p) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content style">
                    {/*<Route path='/messages' component={Dialogs}/>*/}
                    {/*<Route path='/profile' render={Profile}/>*/}

                    <Route path='/messages' render={() => <Dialogs messages={p.state.messagesPage.messages} names={p.state.messagesPage.names}/>}/>
                    <Route path='/profile' render={() => <Profile posts={p.state.profilePage.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;