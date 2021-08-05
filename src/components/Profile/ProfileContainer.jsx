import React from "react";
import Profile from "./profile";
import {addPostCreator, getUserProfile,updateStatus, getUserStatus, updateNewPostTextCreator} from '../../redux/profileReducer';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../hoc/WithAuthRedirect';
import {compose} from 'redux';



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId)
            userId = this.props.myId;
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return <Profile {...this.props}/>
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
    addPostCreator,
    updateNewPostTextCreator,
    getUserProfile,
    getUserStatus,
    updateStatus,
}

export default compose(
    connect(mstp, mdtp),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)
