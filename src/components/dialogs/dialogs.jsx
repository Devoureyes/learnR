import React from 'react';
import s from './dialog.module.css'
import DialogItem from "./dialogitem/dialogitem";
import Message from "./message/message";
import PropTypes from "prop-types";
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../commons/formControls/FormControls';
import {maxLengthCreator} from '../../utils/validators';

const maxLength100 = maxLengthCreator(100)

const Dialogs = (p) => {
    const {
        names,
        messages,
        sendMessage,
    } = p

    let dialogElements = names.map((el) => <DialogItem n={el.id} key={el.id} name={el.name}/>)
    let messageElements = messages.map((el) => <Message m={el.message} key={el.id}/>)

    let addNewMessage = values => {
        sendMessage(values.newMessageBody);
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
                <DialogReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[maxLength100]} name="newMessageBody" placeholder="Enter your message"/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const DialogReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;

Dialogs.propTypes = {
    names: PropTypes.arrayOf(PropTypes.object),
    messages: PropTypes.arrayOf(PropTypes.object),
    newMessageBody: PropTypes.string,
    sendMessage: PropTypes.func.isRequired,
}