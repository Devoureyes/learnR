import React from "react";
import Profile from "./profile";
import {getUserProfile,updateStatus, getUserStatus} from '../../redux/profileReducer';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
//import {WithAuthRedirect} from '../hoc/WithAuthRedirect';
import {compose} from 'redux';



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId)
            userId = this.props.myId;
        this.props.getUserStatus(userId)
        this.props.getUserProfile(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return <Profile {...this.props} updateStatus={this.props.updateStatus} status={this.props.status} profile={this.props.profile}/>
    }
}



let mstp = (state) => {
    const {
        profilePage: {
            profile,
            status
        },
        authPage: {
            id: myId
        }
    } = state
    return {profile,myId,status}
}

let mdtp = {
    getUserProfile,
    getUserStatus,
    updateStatus,
}

export default compose(
    connect(mstp, mdtp),
    withRouter,
)(ProfileContainer)
