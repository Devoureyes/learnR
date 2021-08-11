import React from 'react';
import {searchRequest, searchSuccess, searchFailure} from '../../actions/lessonActions';
import {getSerials} from './serialsReducer';
import {connect} from 'react-redux';
import {Textarea} from '../commons/formControls/FormControls';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator} from '../../utils/validators';
import OneFilm from "./OneFilm";
import s from './lesson.module.css'

let maxLength50 = maxLengthCreator(50);

const Lesson = props => {

    let addNewSearch = values => {
        props.searchRequest(values.newSearchBody);
    };
    console.log(props.serials)
    return <div style={{padding: '3vh'}}>
        <h1>Поиск по сериалам</h1>
        <SearchReduxForm onSubmit={addNewSearch}/>
        <div className={s.films}>
            {Array.isArray(props.serials) && props.serials.map((el,i) => (<OneFilm {...el}/>))}
        </div>
    </div>;
};

const SearchForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} validate={[maxLength50]} name="newSearchBody" placeholder="Find a serial..."/>
        <button>Send</button>
    </form>;
};

const SearchReduxForm = reduxForm({
    form: 'serialSearchForm'
})(SearchForm);

const mapStateToProps = state => ({
    serials: getSerials(state)
});

const mapDispatchToProps = {
    searchRequest,
    searchSuccess,
    searchFailure
};

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);