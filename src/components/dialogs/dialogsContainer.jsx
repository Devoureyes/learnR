import DialogItem from "./dialogitem/dialogitem";
import Message from "./message/message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesReducer";
import Dialogs from "./dialogs";

const DialogsContainer = (p) => {

    let state = p.store.getState().messagesPage

    let onSendMessageClick = () => {
        p.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (text) => {
        p.store.dispatch(updateNewMessageBodyCreator(text));
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} state={state}/>

}

export default DialogsContainer;