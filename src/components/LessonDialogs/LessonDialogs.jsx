import React from 'react';
import {connect} from 'react-redux';
import {getDialogs, getError, getToggle, getUsers} from './LessonDialogs_reducer';
import {
    setDialogsRequest,
    setDialogsSuccess,
    setDialogsFailure,
} from './LessonDialogs_actions';
import s from './LessonDialogs.module.css';

const LessonDialogs = React.memo(props => {
    const {
        setDialogsRequest,
        users,
        dialogs
    } = props

    console.log(dialogs[0])
    React.useEffect(() => {
        setDialogsRequest()
    },[setDialogsRequest])

    return <div className={s.dialogsPage}>
        <div className={s.users}>
            {users.map(el => <div key={el.id}>{el.name}</div>)}
        </div>
        <div className={s.dialog}>
            {dialogs[users[0].id].messages.map(el => <div key={el.id}>{el.message}</div>)}
        </div>
    </div>
})



const mstp = state => ({
    users: getUsers(state),
    dialogs: getDialogs(state),
    toggleIsActive: getToggle(state),
    error: getError(state)
})
const mdtp = {
    setDialogsRequest,
    setDialogsSuccess,
    setDialogsFailure,
}
export default connect(mstp,mdtp)(LessonDialogs);