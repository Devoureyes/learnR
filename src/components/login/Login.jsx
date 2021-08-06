import React from "react";
import s from './login.module.css'
import {Field, reduxForm} from 'redux-form';
import {loginInput,passwordInput} from '../commons/formControls/FormControls';
import {required} from '../../utils/validators';
import {login} from '../../redux/authReducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {LoginRedirect} from '../hoc/LoginRedirect';
import formStyle from '../commons/formControls/formControls.module.css'

const LoginForm = props => {
    return <form onSubmit={props.handleSubmit}>
        {props.error && <div className={formStyle.formSumError}>{props.error}</div>}
        <div>
            <Field component={loginInput} name={"email"} className={s.input} validate={[required]} placeholder="E-mail"/>
        </div>
        <div>
            <Field component={passwordInput} name={"password"} className={s.input} validate={[required]} placeholder="Password"/>
        </div>
        <div className={s.label}>
            <label>
                <Field component={"input"} name={"rememberMe"} type="checkbox"/>Remember me
            </label>
        </div>
        <div>
            <button className={s.myButton}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (p) => {
    const onSubmit = ({email,password,rememberMe}) => {
        p.login(email,password,rememberMe)
    }

    return <div className={s.loginRel}>
        <div className={s.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    </div>
}

export default compose(LoginRedirect,connect(null,{login}))(Login);
