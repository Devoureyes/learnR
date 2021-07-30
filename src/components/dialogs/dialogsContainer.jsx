import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

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

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;