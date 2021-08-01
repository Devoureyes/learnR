import React from "react";
import Profile from "./profile";
import axios from "axios";
import {addPostCreator, setUserProfile, updateNewPostTextCreator} from "../../redux/profileReducer";
import {connect} from "react-redux";


class ProfileContainer extends React.Component {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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

export default connect(mstp, mdtp)(ProfileContainer)