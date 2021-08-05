import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {auth} from "../../redux/authReducer";
import {compose} from 'redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth()
    }

    render(){
        return <Header {...this.props}/>
    }
}
const mstp = (state) => {
    const {
        isAuth,
        login,
    } = state.authPage
    return {
        isAuth,
        login
    }
}

export default compose(
    connect(mstp,{auth})
)(HeaderContainer)