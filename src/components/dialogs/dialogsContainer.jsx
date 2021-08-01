import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import React from "react";

class DialogContainer extends React.Component {

render() {
    return <Dialogs />
}
}

let mapStateToProps = (state) => {
    return {
        names: state.messagesPage.names,
        messages: state.messagesPage.messages,
        newMessageBody: state.messagesPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody:(text) => {dispatch(updateNewMessageBodyCreator(text));},
        sendMessage: () => {dispatch(sendMessageCreator());},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DialogContainer);
