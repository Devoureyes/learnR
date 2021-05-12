import s from './dialog.module.css'
import DialogItem from "./dialogitem/dialogitem";
import Message from "./message/message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesReducer";

const Dialogs = (p) => {

    let dialogElements = p.state.names.map((el) => <DialogItem n={el.id} name={el.name}/>)
    let messageElements = p.state.messages.map((el) => <Message m={el.message}/>)
    let newMessageBody = p.state.newMessageBody

    let onSendMessageClick = () => {
        p.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        p.dispatch(updateNewMessageBodyCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message"/></div>
                        <div><button onClick={onSendMessageClick}>Send</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;