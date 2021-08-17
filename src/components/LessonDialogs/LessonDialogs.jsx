import React from 'react';
import {connect} from 'react-redux';
import {getDialog, getError, getToggle, getUsers} from './LessonDialogs_reducer';
import {
    setDialogLRequest,
    setUsersLRequest
} from './LessonDialogs_actions';
import s from './LessonDialogs.module.css';
import {compose} from 'redux';
import {LAuthRedirect_hoc} from './LAuthRedirect_hoc';
import {getUserId} from './auth/LAuth_reducer';

const LessonDialogs = React.memo(props => {

    const {
        setUsersLRequest,
        setDialogLRequest,
        users,
        dialog,
        userId
    } = props

    const setDialogIdCallback = React.useCallback((id) => {
        setDialogLRequest({userId: userId,id: id})
    },[setDialogLRequest,userId])

    React.useEffect(() => {
        setUsersLRequest(userId)
    },[setUsersLRequest,userId])

    return <div className={s.dialogsPage}>
        <div className={s.users}>
            {users.map(el => <div className={s.userSel} key={el.id} onClick={() => setDialogIdCallback(el.id)}>{el.name}</div>)}
        </div>
        <div className={s.dialog}>
            {dialog !== undefined && dialog.messages.map(el => <div className={el.userId === userId ? s.myMessage : s.ComMessage} key={el.id}>
                <span>{el.message}</span>
            </div>)}
        </div>
    </div>
})



const mstp = state => ({
    users: getUsers(state),
    dialog: getDialog(state),
    toggleIsActive: getToggle(state),
    error: getError(state),
    userId: getUserId(state)
})
const mdtp = {
    setUsersLRequest,
    setDialogLRequest
}
export default compose(
    LAuthRedirect_hoc,
    connect(mstp,mdtp)
)(LessonDialogs);