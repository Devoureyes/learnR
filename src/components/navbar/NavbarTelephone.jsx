import React from "react";
import s from "./navbar.module.css";
import {NavLink} from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return <div className={'hamburger-menu'}>
        <input id="menu__toggle" type="checkbox"/>
        <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
        </label>
        <ul className={'menu__box'}>
            <li><NavLink className={'menu__item'} activeClassName={s.active} to="/profile">Profile</NavLink></li>
            <li><NavLink className={'menu__item'} activeClassName={s.active} to="/users">Users</NavLink></li>
            <li><NavLink className={'menu__item'} activeClassName={s.active} to="/messages">Messages</NavLink></li>
            <li><NavLink className={'menu__item'} activeClassName={s.active} to="/news">News</NavLink></li>
            <li><NavLink className={'menu__item'} activeClassName={s.active} to="/todo">Todo</NavLink></li>
            <li><NavLink className={'menu__item'} activeClassName={s.active} to="/settings">Settings</NavLink></li>
            <li><NavLink className={'menu__item'} style={{fontSize: '22px', color: '#000000'}} activeClassName={s.active}
                         to="/lesson">Lesson</NavLink></li>
            <li><NavLink className={'menu__item'} style={{fontSize: '22px', color: '#000000'}} activeClassName={s.active}
                         to="/github">GitHubLesson</NavLink></li>
            <li><NavLink className={'menu__item'} style={{fontSize: '22px', color: '#000000'}} activeClassName={s.active}
                         to="/lessonDialogs">LessonDialogs</NavLink></li>
        </ul>
    </div>
}