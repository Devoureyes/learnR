import {Redirect} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';


let mapStateToPropsRedirect = state => ({
    isAuthorized: state.auth_reducer.isAuthorized
});

export const LoginGitRedirect = Component => {

    const RedirectComponent = props => {
        return props.isAuthorized
            ? <Redirect to={'/github'}/>
            : <Component {...props}/>;
    };

    return connect(mapStateToPropsRedirect)(RedirectComponent);
};