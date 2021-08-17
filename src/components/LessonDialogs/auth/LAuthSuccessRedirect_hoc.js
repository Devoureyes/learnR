import {Redirect} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';


let mapStateToPropsRedirect = state => ({
    isAuth: state.LAuth_reducer.isAuth
})

export const LAuthSuccessRedirect_hoc = Component => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) return <Redirect to={'/lessonDialogs'}/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsRedirect)(RedirectComponent)
}