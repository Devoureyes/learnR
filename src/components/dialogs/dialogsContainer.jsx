import {sendMessage, updateNewMessageBody} from "../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import React from "react";

class DialogContainer extends React.Component {

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

export default connect(mapStateToProps, {sendMessage, updateNewMessageBody})(DialogContainer);
