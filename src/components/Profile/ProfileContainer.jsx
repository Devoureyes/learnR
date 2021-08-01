import React from "react";
import Profile from "./profile";
import axios from "axios";
import {addPostCreator, setUserProfile, updateNewPostTextCreator} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId)
            userId = 18746;
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+userId,{
            headers: {'API-KEY': 'b057d183-97e6-4b4b-a821-718b9dfb3361'}
        })
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

let WithContainer = withRouter(ProfileContainer)
export default connect(mstp, mdtp)(WithContainer)