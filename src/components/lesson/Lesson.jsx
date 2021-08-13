import React from 'react';
import {searchRequest, searchSuccess, searchFailure} from '../../actions/lessonActions';
import {getError, getFetch, getSerials} from './serialsReducer';
import {connect} from 'react-redux';
import {loginInput} from '../commons/formControls/FormControls';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator} from '../../utils/validators';
import OneFilm from "./OneFilm";
import s from './lesson.module.css'
import Loader from "../todo/Loader";

let maxLength50 = maxLengthCreator(50);

const Lesson = React.memo(props => {
    const {
        fetch,
        serials,
        searchRequest,
        error
    } = props

    const addNewSearch = React.useCallback(values => {
        searchRequest(values.newSearchBody);
    },[searchRequest])

    return <div className={s.lesson}>
        <h1 className={s.h1}>Поиск по сериалам</h1>
        <SearchReduxForm onSubmit={addNewSearch}/>
        <div>{error}</div>
        {fetch ? <Loader type={1} /> : <div className={s.films}>
            {Array.isArray(serials)
                && (serials.length > 0 ? serials.map((el, i) => (<OneFilm key={i} {...el}/>)) : <h1 className={s.h1}>Ничего не найдено</h1>)}
        </div>}
    </div>;
});

const SearchForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={loginInput} validate={[maxLength50]} name="newSearchBody" placeholder="Find a serial..."/>
        <button>Send</button>
    </form>;
};

const SearchReduxForm = reduxForm({
    form: 'serialSearchForm'
})(SearchForm);

const mapStateToProps = state => ({
    serials: getSerials(state),
    fetch: getFetch(state),
    error: getError(state)
});

const mapDispatchToProps = {
    searchRequest,
    searchSuccess,
    searchFailure
};

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);