import React from "react";
import s from "./ProfileInfo.module.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const {contacts}=props
    return <ul className={s.ulp}>
        {Object.keys(contacts).map(key => {
            return <li key={key}>{key}: <a style={{color: 'orange'}} href={contacts[key]}>{contacts[key]}</a></li>
        })}
    </ul>
}