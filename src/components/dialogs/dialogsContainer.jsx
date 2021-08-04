import {sendMessage, updateNewMessageBody} from "../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import React from "react";
import {WithAuthRedirect} from '../hoc/WithAuthRedirect';
import {compose} from 'redux';

class DialogsContainer extends React.Component {

    render() {
    return <Dialogs {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    const {
        names,
        messages,
        newMessageBody,
    } = state.messagesPage

    return {
        names,
        messages,
        newMessageBody,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage, updateNewMessageBody}),
    WithAuthRedirect
)(DialogsContainer)

