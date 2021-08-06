import React from "react";
import s from './login.module.css'
import {Field, reduxForm} from 'redux-form';
import {loginInput} from '../commons/formControls/FormControls';
import {required} from '../../utils/validators';

const Login = props => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div className={s.loginRel}>
        <div className={s.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    </div>
}

const LoginForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={loginInput} name={"login"} className={s.input} validate={[required]} placeholder="Login"/>
        </div>
        <div>
            <Field component={loginInput} name={"password"} className={s.input} validate={[required]} placeholder="Password"/>
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

export default Login;
