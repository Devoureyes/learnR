import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (p) => {

    let state = p.store.getState()

    let addPost = () => {
        p.store.dispatch(addPostCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextCreator(text);
        p.store.dispatch(action);
    }
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} postText={state.profilePage.postText} />)
}

export default MyPostsContainer;
