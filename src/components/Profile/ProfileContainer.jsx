import React from "react";
import Profile from "./profile";
import {getUserProfile,updateStatus, getUserStatus} from '../../redux/profileReducer';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {saveProfileRequest, setUserPhotoRequest} from './profile_actions';


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if(!userId)
            userId = this.props.AuthUserId;
        this.props.getUserStatus(userId)
        this.props.getUserProfile(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }



    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.userId)
        {this.refreshProfile()}
    }

    render() {
        return <Profile {...this.props}
            isOwner={!this.props.match.params.userId}
            updateStatus={this.props.updateStatus}
            status={this.props.status}
            profile={this.props.profile}
            savePhoto={this.props.setUserPhotoRequest}
            saveProfile={this.props.saveProfileRequest}/>
    }
}



let mstp = (state) => {
    const {
        profilePage: {
            profile,
            status
        },
        authPage: {
            id: AuthUserId
        }
    } = state
    return {profile,AuthUserId,status}
}

let mdtp = {
    getUserProfile,
    getUserStatus,
    updateStatus,
    setUserPhotoRequest,
    saveProfileRequest
}

export default compose(
    connect(mstp, mdtp),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
