import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {AuthAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        AuthAPI().then(r => {
            if(r.resultCode === 0) {
                let {id,email,login} = r.data
                this.props.setAuthUserData(id,email,login)
            }
        })
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

export default connect(mstp,{setAuthUserData})(HeaderContainer)