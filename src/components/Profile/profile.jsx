import React from "react"
import s from "./profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import Slideshow from "../sl";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <Slideshow />
            <MyPosts/>
        </div>
    )
}

export default Profile;