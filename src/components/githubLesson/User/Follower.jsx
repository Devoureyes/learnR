import React from 'react';
import s from '../git.module.css'

const Follower = props => {
    const {
        avatar_url,
        login,
        setUserRequest
    } = props
    const goToFollower = React.useCallback(() => {
        setUserRequest(login)
    },[setUserRequest,login])

    return <div className={s.follower} onClick={goToFollower}>
        <img src={avatar_url} alt={login}/>
        <span>{login}</span>
    </div>
}

export default Follower;