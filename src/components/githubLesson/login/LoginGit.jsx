import React from 'react';
import formStyle from '../../commons/formControls/formControls.module.css';
import {Field, reduxForm} from 'redux-form';
import {tokenGitInput} from '../../commons/formControls/FormControls';
import s from '../../login/login.module.css';
import {required} from '../../../utils/validators';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {authorize, getIsAuthorized} from './auth_actions';
import {LoginGitRedirect} from '../../hoc/LogitGitRedirect';



const LoginGitForm = props => (<form onSubmit={props.handleSubmit}>
        {props.error && <div className={formStyle.formSumError}>{props.error}</div>}
        <div style={{margin: '0 0 15px 0'}}>
            <Field component={tokenGitInput} name={"token"} className={s.input} validate={[required]} placeholder="Password"/>
        </div>
        <div>
            <button className={s.myButton}>Login</button>
        </div>
    </form>)

const LoginGitReduxForm = reduxForm({
    form: 'loginGit'
})(LoginGitForm)

const LoginGit = (props) => {

    React.useEffect(() => {
        if(window.localStorage.token !== null) {
            props.authorize(window.localStorage.token)
        }
    })

    const onSubmit = ({token}) => {
        props.authorize(token)
    }

    return <div className={s.loginRel}>
        <div className={s.loginGit}>
            <h1>LoginGit</h1>
            <LoginGitReduxForm onSubmit={onSubmit} />
        </div>
    </div>
}

export default compose(LoginGitRedirect,connect(null, {authorize,getIsAuthorized}))(LoginGit);