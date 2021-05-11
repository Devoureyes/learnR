import React from "react"
import MyPosts from "./MyPosts/MyPosts";
import Slideshow from "../sl";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (p) => {
    return (
        <div>
            <ProfileInfo />
            <Slideshow />
            <MyPosts state={p.state} dispatch={p.dispatch} />
        </div>
    )
}

export default Profile;