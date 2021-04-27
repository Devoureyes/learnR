import React from "react";
import s from "./post.module.css";

const Post = (props) => {
    return (
        <div className={s.post}>
            <img className={s.pimg} src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" alt=""/>
            <div className={s.pdesc}>
                <p>{props.post}</p>
            </div>
            <div className={s.estimate}>
                <button className={`${s.like} myButton`}>Like</button>
                <button className={`${s.dislike} myButton`}>Dislike</button></div>
        </div>
    )
}

export default Post;
