import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {auth} from "../../redux/authReducer";

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

export default connect(mstp,{auth})(HeaderContainer)