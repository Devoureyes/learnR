import React from "react"
import Slideshow from "../sl";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (p) => {
    const {
        profile,
        status,
        updateStatus,
        getUserStatus,
        getUserProfile,
    }   = p

    return <div className="profile">
        <ProfileInfo
            profile={profile}
            getUserStatus={getUserStatus}
            getUserProfile={getUserProfile}
            status={status}
            updateStatus={updateStatus}
        />
        <Slideshow/>
        <MyPostsContainer />
    </div>
}

export default Profile;