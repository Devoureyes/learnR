import {Redirect} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';


let mapStateToPropsRedirect = state => ({
    isAuth: state.authPage.isAuth
})

export const LoginRedirect = Component => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) return <Redirect to={'/profile'}/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsRedirect)(RedirectComponent)
}