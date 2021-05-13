import React from "react";
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/Profile/profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";



const App = (p) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content style">
                    {/*<Route path='/messages' component={Dialogs}/>*/}
                    {/*<Route path='/profile' render={Profile}/>*/}

                    <Route path='/messages' render={() => <DialogsContainer store={p.store} />}/>
                    <Route path='/profile' render={() => <Profile store={p.store}/>}/>
                </div>
            </div>
    )
}

export default App;