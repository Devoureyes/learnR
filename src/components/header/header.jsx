import React from "react";
import s from "./header.module.css"
import {NavLink} from "react-router-dom";

const Header = (p) => {
    return (
        <header className={`${s.header} style`}>
            <div className={s.logo}>
                <img src="https://static.vecteezy.com/system/resources/previews/001/191/986/non_2x/circle-logo-png.png" alt=""/>
            </div>
            <div className={`${s.name} ${s.area}`}><p>Devoureyes.online</p></div>
            <div className={s.login}>
                { p.isAuth ? <button className={s.logout} onClick={p.logout}>Logout</button> :<NavLink className={s.linkLogin} to={'/login'}>LOGIN</NavLink>}
            </div>
        </header>
    )
}

export default Header;