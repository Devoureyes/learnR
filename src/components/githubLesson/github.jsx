import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {WithAuthGitRedirect} from '../hoc/WithAuthGitRedirect';
import {setUserRequest} from './github_actions';
import {getError, getToggleIsActive, getUser, getUserSearch} from './github_reducer';
import s from './git.module.css';
import User from './User/User';
import {Field, reduxForm} from 'redux-form';
import {loginInput} from '../commons/formControls/FormControls';
import {maxLengthCreator} from '../../utils/validators';
import Loader from '../todo/Loader';


let maxLength50 = maxLengthCreator(50);

const SearchGitForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={loginInput} validate={[maxLength50]} name="newSearchUser" placeholder="Find a serial..."/>
        <button>Send</button>
    </form>;
};

const SearchGitReduxForm = reduxForm({
    form: 'SearchGitForm'
})(SearchGitForm);

const Github = React.memo(props => {
    const {
        setUserRequest,
        user,
        userSearch,
        error,
        toggleIsActive,
    } = props;

    React.useEffect(() => {
        if (userSearch === '') {
            setUserRequest('dev');
        } else {
            setUserRequest(userSearch);
        }
    }, [userSearch,setUserRequest]);

    const searchUser = React.useCallback((values) => {
        setUserRequest(values.newSearchUser);
    }, [setUserRequest]);

    return <div className={s.git}>
        {toggleIsActive
            ? <Loader type={1} />
            : (user !== null && <User setUserRequest={setUserRequest} user={user}/>)}
        <div className={s.search}>
            <SearchGitReduxForm onSubmit={searchUser}/>
            {error !== '' && <span>{error}</span>}
        </div>
    </div>;
});

const mstp = state => ({
    user: getUser(state),
    userSearch: getUserSearch(state),
    error: getError(state),
    toggleIsActive: getToggleIsActive(state),
});

const mdtp = {
    setUserRequest
};

export default compose(WithAuthGitRedirect, connect(mstp, mdtp))(Github);