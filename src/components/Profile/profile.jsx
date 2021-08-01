import React from "react"
//import MyPosts from "./MyPosts/MyPosts";
import Slideshow from "../sl";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../todo/Loader";

const Profile = (p) => {
    return <div>
        <ProfileInfo profile={p.profile}/>
        <Slideshow/>
        {/*<MyPostsContainer />*/}
    </div>
}

export default Profile;