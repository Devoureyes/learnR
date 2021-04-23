import React from "react";
import s from "./navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={`${s.nav} style`}>
            <ul className={s.ulnav}>
                <li><NavLink className={s.itemnav} activeClassName={s.active} to="/profile">Profile</NavLink></li>
                <li><NavLink className={s.itemnav} activeClassName={s.active} to="/messages">Messages</NavLink></li>
                <li><NavLink className={s.itemnav} activeClassName={s.active} to="/news">News</NavLink></li>
                <li><NavLink className={s.itemnav} activeClassName={s.active} to="/music">Music</NavLink></li>
                <li><NavLink className={s.itemnav} activeClassName={s.active} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;