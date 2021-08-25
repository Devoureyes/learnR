import React from "react";
import s from './login.module.css'
import {Field, reduxForm} from 'redux-form';
import {createField, Input, loginInput, passwordInput} from '../commons/formControls/FormControls';
import {required} from '../../utils/validators';
import {getAuth, getCaptcha, login} from '../../redux/authReducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {LoginRedirect} from '../hoc/LoginRedirect';
import formStyle from '../commons/formControls/formControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={formStyle.formSumError}>{error}</div>}
        <div>
            <Field component={loginInput} name={"email"} className={s.input} validate={[required]} placeholder="E-mail"/>
        </div>
        <div>
            <Field component={passwordInput} name={"password"} className={s.input} validate={[required]} placeholder="Password"/>
        </div>
        {captchaUrl && <div>
            <img src={captchaUrl} alt={'captcha'}/>
            {createField('Symbols from image','captcha',[required],Input,{})}
        </div>}

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

const Login = ({login,captchaUrl}) => {
    const onSubmit = ({email,password,rememberMe,captcha}) => {
        login(email,password,rememberMe,captcha)
    }

    return <div className={s.loginRel}>
        <div className={s.login}>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
        </div>
    </div>
}
const mstp = state => ({
    captchaUrl: getCaptcha(state),
    isAuth: getAuth(state)
})
export default compose(LoginRedirect,connect(mstp,{login}))(Login);
