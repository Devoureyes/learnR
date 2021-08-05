import React from "react";
import s from './login.module.css'

const Login = props => {
    return <div className={s.loginRel}>
        <div className={s.login}>
            <h1>Login</h1>
            <form>
                <div>
                    <input className={s.input} placeholder="login"/>
                </div>
                <div>
                    <input className={s.input} placeholder="password"/>
                </div>
                <div className={s.label}>
                    <label>
                        <input type="checkbox"/>Remember me
                    </label>
                </div>
                <div>
                    <button className={s.myButton}>Login</button>
                </div>
            </form>
        </div>
    </div>
}

export default Login;
