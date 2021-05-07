import React from "react"
import MyPosts from "./MyPosts/MyPosts";
import Slideshow from "../sl";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (p) => {
    return (
        <div>
            <ProfileInfo />
            <Slideshow />
            <MyPosts state={p.state} addPost={p.addPost} updateNewPostText={p.updateNewPostText} />
        </div>
    )
}

export default Profile;