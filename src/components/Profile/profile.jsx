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
        isOwner,
        savePhoto,
        saveProfile,
        error
    }   = p

    return <div className="profile">
        <ProfileInfo
            savePhoto={savePhoto}
            isOwner={isOwner}
            profile={profile}
            getUserStatus={getUserStatus}
            getUserProfile={getUserProfile}
            status={status}
            updateStatus={updateStatus}
            saveProfile={saveProfile}
            error={error}
        />
        <Slideshow/>
        <MyPostsContainer />
    </div>
}

export default Profile;