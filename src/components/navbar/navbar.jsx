import React from "react";
import s from "./navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={`${s.nav} style`}>
            <ul className={s.ulnav}>
                <li><div className={s.itemnav}><NavLink to="/profile">Profile</NavLink></div></li>
                <li><div className={s.itemnav}><NavLink to="/messages">Messages</NavLink></div></li>
                <li><div className={s.itemnav}><NavLink to="/news">News</NavLink></div></li>
                <li><div className={s.itemnav}><NavLink to="/music">Music</NavLink></div></li>
                <li><div className={s.itemnav}><NavLink to="/settings">Settings</NavLink></div></li>
            </ul>
        </nav>
    )
}

export default Navbar;