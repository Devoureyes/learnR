import React from "react"
//import MyPosts from "./MyPosts/MyPosts";
import Slideshow from "../sl";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (p) => {
    return (
        <div>
            <ProfileInfo />
            <Slideshow />
            <MyPostsContainer store={p.store} />
        </div>
    )
}

export default Profile;