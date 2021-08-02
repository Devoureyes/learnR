import React from "react";
import Profile from "./profile";
import {addPostCreator, setUserProfile, updateNewPostTextCreator} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId)
            userId = 18746;
        profileAPI(userId).then(data => { this.props.setUserProfile(data)})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mstp = (state) => {
    const {
        profilePage: {
            profile
        }
    } = state
    return {profile}
}
let mdtp = {
    addPostCreator,
    updateNewPostTextCreator,
    setUserProfile
}

let WithContainer = withRouter(ProfileContainer)
export default connect(mstp, mdtp)(WithContainer)