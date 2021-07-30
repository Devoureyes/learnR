import s from "./MyPosts.module.css";
import Post from "./Post/post";
import React from "react";

const MyPosts = (p) => {
    const {
        posts,
        addPost,
        updateNewPostText
    } = p

    let postElements = posts.map((el) => <Post post={el}/>)

    let newPostEl = React.createRef();

    let onPostChange = () => {
        let text = newPostEl.current.value;
        updateNewPostText(text);
    }

    return (
        <div className={s.posts}>
                <div className={s.add}>
                    <textarea onChange={onPostChange} ref={newPostEl} placeholder='Type something' value={p.postText}/>
                    <button onClick={addPost} className={`myButton ${s.but}`}>Add new post
                    </button>
                </div>
                {postElements}
        </div>
    )
}

export default MyPosts;
