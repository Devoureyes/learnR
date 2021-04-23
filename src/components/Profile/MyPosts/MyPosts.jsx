import s from "./MyPosts.module.css";
import Post from "./Post/post";
import React from "react";

let p = [
    {id: 1, message: 'Now look at this'},
    {id: 2, message: 'Today, i\'m went to the park and ate a hamburger'},
    {id: 3, message: 'Hello! It\'s my first post'},
]

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <div className={s.add}>
                <textarea/>
                <button className={`myButton ${s.but}`}>Add new post</button>
            </div>
            {p.map((el) => <Post message={el.message}/>)}
        </div>
    )
}

export default MyPosts;
