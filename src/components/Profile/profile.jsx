import React from "react"
import Slideshow from "../sl";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (p) => {
    return <div>
        <ProfileInfo profile={p.profile}/>
        <Slideshow/>
        {/*<MyPostsContainer />*/}
    </div>
}

export default Profile;