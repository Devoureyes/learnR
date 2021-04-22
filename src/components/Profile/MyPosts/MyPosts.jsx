import s from "./MyPosts.module.css";
import Post from "./Post/post";
import React from "react";

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <div className={s.add}>
                <textarea/>
                <button className={`myButton ${s.but}`}>Add new post</button>
            </div>
            <Post message='Now look at this' />
            <Post message="Today, i'm went to the park and ate a hamburger" />
            <Post message="Hello! It's my first post" />
        </div>
    )
}

export default MyPosts;
