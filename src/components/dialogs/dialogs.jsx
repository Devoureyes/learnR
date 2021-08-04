import s from './dialog.module.css'
import DialogItem from "./dialogitem/dialogitem";
import Message from "./message/message";
import PropTypes from "prop-types";

const Dialogs = (p) => {
    const {
        names,
        messages,
        newMessageBody,
        sendMessage,
        updateNewMessageBody,
    } = p

    let dialogElements = names.map((el) => <DialogItem n={el.id} key={el.id} name={el.name}/>)
    let messageElements = messages.map((el) => <Message m={el.message} key={el.id}/>)

    let onSendMessageClick = () => {
        sendMessage();
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        updateNewMessageBody(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}

            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>

            </div>
            <div className={s.messageInput}>
                <div><textarea onChange={onNewMessageChange} value={newMessageBody}
                               placeholder="Enter your message"/></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

Dialogs.propTypes = {
    names: PropTypes.arrayOf(PropTypes.object),
    messages: PropTypes.arrayOf(PropTypes.object),
    newMessageBody: PropTypes.string,
    sendMessage: PropTypes.func.isRequired,
    updateNewMessageBody: PropTypes.func.isRequired,
}