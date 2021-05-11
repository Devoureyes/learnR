import s from "./MyPosts.module.css";
import Post from "./Post/post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (p) => {

    let newPostEl = React.createRef();

    let addPost = () => {
        p.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostEl.current.value;
        p.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.posts}>
            <div className={s.add}>
                <textarea onChange={onPostChange} ref={newPostEl} value={p.state.postText}/>
                <button onClick={addPost} className={`myButton ${s.but}`}>Add new post
                </button>
            </div>
            {p.state.posts.map((el) => <Post state={el}/>)}
        </div>
    )
}

export default MyPosts;
