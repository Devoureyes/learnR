import s from "./MyPosts.module.css";
import Post from "./Post/post";
import React from "react";



const MyPosts = (p) => {
    return (
        <div className={s.posts}>
            <div className={s.add}>
                <textarea/>
                <button className={`myButton ${s.but}`}>Add new post</button>
            </div>
            {p.posts.map((el) => <Post post={el.post}/>)}
        </div>
    )
}

export default MyPosts;
