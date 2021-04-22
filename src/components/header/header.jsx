import React from "react";
import s from "./header.module.css"

const Header = () => {
    return (
        <header className={`${s.header} style`}>
            <img src="https://static.vecteezy.com/system/resources/previews/001/191/986/non_2x/circle-logo-png.png" alt=""/>
            <div className={s.name}><p>Ember</p></div>
        </header>
    )
}

export default Header;