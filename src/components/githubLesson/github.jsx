import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {WithAuthGitRedirect} from '../hoc/WithAuthGitRedirect';
import {setUserRequest} from './github_actions';
import {getUser} from './github_reducer';

const Github = React.memo(props => {
    const { setUserRequest } = props

    React.useEffect(() => {
        setUserRequest('devoureyes')
    },[setUserRequest])

    console.log(props)
    return <div>
        <h1>Welcome to Git fucking Hub</h1>
    </div>
})

const mstp = state => ({
    user: getUser(state)
})

const mdtp = {
    setUserRequest
}


export default compose(WithAuthGitRedirect,connect(mstp,mdtp))(Github);