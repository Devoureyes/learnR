import React from "react"
import Slideshow from "../sl";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (p) => {
    debugger
    return <div>
        <ProfileInfo profile={p.profile} status={p.status}/>
        <Slideshow/>
        {/*<MyPostsContainer />*/}
    </div>
}

export default Profile;