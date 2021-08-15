import React from "react";
import s from "./post.module.css";

const Post = (p) => {
    const {
        post: {
            post,likeCount,id
        },
        deletePost
    } = p

    return (
        <div className={s.post}>
            <img className={s.pimg} src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" alt=""/>
            <div className={s.pdesc}>
                <p>{post}</p>
            </div>
            <div className={s.estimate}>
                <p>{likeCount}</p>
                <button className={`${s.like} myButton`}>Like</button>
                <button className={`${s.dislike} myButton`}>Dislike</button>
                <button onClick={deletePost.bind(null,id)} className={`${s.dislike} myButton`}>Delete</button>
            </div>
        </div>
    )
}

export default Post;
