import {Redirect} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';


let mapStateToPropsRedirect = state => ({
    isAuthorized: state.auth_reducer.isAuthorized
})

export const WithAuthGitRedirect = Component => {

    const RedirectComponent = props => {
        return !props.isAuthorized
            ? <Redirect to={'/loginGit'}/>
            : <Component {...props}/>
    }

    return connect(mapStateToPropsRedirect)(RedirectComponent)
}