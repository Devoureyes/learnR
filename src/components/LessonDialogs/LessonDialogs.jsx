import React from 'react';
import {connect} from 'react-redux';
import {getDialog, getError, getToggle, getUsers} from './LessonDialogs_reducer';
import {
    sendMessageRequest,
    setDialogLRequest,
    setUsersLRequest
} from './LessonDialogs_actions';
import s from './LessonDialogs.module.css';
import {compose} from 'redux';
import {LAuthRedirect_hoc} from './LAuthRedirect_hoc';
import {getUserId} from './auth/LAuth_reducer';
import {Field, reduxForm,reset} from 'redux-form';
import {loginInput} from '../commons/formControls/FormControls';


const DialogInputForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={loginInput} name="newInputBody"/>
        <button>Send</button>
    </form>;
};
const afterSubmit = (result, dispatch) =>
    dispatch(reset('InputDialogMessageLesson'));

const InputReduxForm = reduxForm({
    form: 'InputDialogMessageLesson',
    onSubmitSuccess: afterSubmit,
})(DialogInputForm);

const LessonDialogs = React.memo(props => {

    const {
        setUsersLRequest,
        setDialogLRequest,
        sendMessageRequest,
        users,
        dialog,
        userId
    } = props;

    const setDialogIdCallback = React.useCallback((id) => {
        setDialogLRequest({userId: userId, id: id});
    }, [setDialogLRequest, userId]);


    const onSubmit = React.useCallback(values => {
        sendMessageRequest({dialogId: dialog.id,message: {userId: userId,message:values.newInputBody}});
    }, [sendMessageRequest,userId,dialog]);


    const onSubmitNewDialog = React.useCallback(values => {
        sendMessageRequest({dialogId: -1,message: {userId: userId,message:values.newInputBody}});
    },[sendMessageRequest,userId])

    React.useEffect(() => {
        setUsersLRequest(userId);
    }, [setUsersLRequest, userId]);

    return <div className={s.dialogsPage}>
        <div className={s.users}>
            {users.map(el => <div
                className={s.userSel}
                key={el.id}
                onClick={() => setDialogIdCallback(el.id)}>
                {el.name}
            </div>)}
        </div>
        {dialog !== undefined ?
        <div className={s.dialog}>
            {dialog.messages.map(el =>
                <div
                    className={el.userId === userId
                        ? s.myMessage
                        : s.ComMessage}
                    key={el.id}>
                    <span>{el.message}</span>
                </div>)}
            <InputReduxForm onSubmit={onSubmit}/>
        </div> : <InputReduxForm onSubmit={onSubmitNewDialog}/>}

    </div>;
});

const mstp = state => ({
    users: getUsers(state),
    dialog: getDialog(state),
    toggleIsActive: getToggle(state),
    error: getError(state),
    userId: getUserId(state)
});
const mdtp = {
    setUsersLRequest,
    setDialogLRequest,
    sendMessageRequest
};
export default compose(
    LAuthRedirect_hoc,
    connect(mstp, mdtp)
)(LessonDialogs);