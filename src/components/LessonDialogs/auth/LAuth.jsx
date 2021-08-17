import React from 'react';
import formStyle from '../../commons/formControls/formControls.module.css';
import {Field, reduxForm} from 'redux-form';
import {loginInput, passwordInput} from '../../commons/formControls/FormControls';
import s from '../../login/login.module.css';
import {required} from '../../../utils/validators';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {LAuthSuccessRedirect_hoc} from './LAuthSuccessRedirect_hoc';
import {setUserDataLRequest} from './LAuth_actions';


const LoginLForm = props => {
    const {handleSubmit,error} = props

    return <form onSubmit={handleSubmit}>
        {error && <div className={formStyle.formSumError}>{error}</div>}
        <div>
            <Field component={loginInput} name={'login'} className={s.input} validate={[required]}
                   placeholder="E-mail"/>
        </div>
        <div>
            <Field component={passwordInput} name={'password'} className={s.input} validate={[required]}
                   placeholder="Password"/>
        </div>
        <div>
            <button className={s.myButton}>Login</button>
        </div>
    </form>;
};

const LoginLReduxForm = reduxForm({
    form: 'loginForLAuth'
})(LoginLForm);

const LAuth = props => {

    const {setUserDataLRequest} = props;
    const onSubmit = React.useCallback((payload) => {
        setUserDataLRequest(payload);
    }, [setUserDataLRequest]);

    return <div className={s.loginRel}>
        <div className={s.login}>
            <h1>Login</h1>
            <LoginLReduxForm onSubmit={onSubmit}/>
        </div>
    </div>;
};

export default compose(LAuthSuccessRedirect_hoc, connect(null, {setUserDataLRequest}))(LAuth);