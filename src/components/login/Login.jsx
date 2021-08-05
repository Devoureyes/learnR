import React from "react";
import s from './login.module.css'
import {Field, reduxForm} from 'redux-form';

const Login = props => {
    return <div className={s.loginRel}>
        <div className={s.login}>
            <h1>Login</h1>
            <form>
                <div>
                    <Field component={"input"} name={"login"} className={s.input} placeholder="Login"/>
                </div>
                <div>
                    <Field component={"input"} name={"password"} className={s.input} placeholder="Password"/>
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
        </div>
    </div>
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(Login)

export default LoginReduxForm;
