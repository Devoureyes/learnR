import React from 'react';
import {connect} from 'react-redux';
import {getDialog, getError, getToggle, getUsers} from './LessonDialogs_reducer';
import {
    setUsersLRequest
} from './LessonDialogs_actions';
import s from './LessonDialogs.module.css';
import {compose} from 'redux';
import {LAuthRedirect_hoc} from './LAuthRedirect_hoc';
import {getUserId} from './auth/LAuth_reducer';

const LessonDialogs = React.memo(props => {

    const {
        setUsersLRequest,
        users,
        dialog,
        userId
    } = props

    const setDialogIdCallback = React.useCallback((id) => {
        setUsersLRequest(id)
    },[setUsersLRequest])

    React.useEffect(() => {
        setUsersLRequest(userId)
    },[setUsersLRequest,userId])

    return <div className={s.dialogsPage}>
        <div className={s.users}>
            {users.map(el => <div className={s.userSel} key={el.id} onClick={() => setDialogIdCallback(el.id)}>{el.name}</div>)}
        </div>
        <div className={s.dialog}>
            {dialog.length > 0 && dialog.lengthdialogs[0].messages.map(el => <div key={el.id}>{el.message}</div>)}
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
}
export default compose(
    LAuthRedirect_hoc,
    connect(mstp,mdtp)
)(LessonDialogs);