import React from 'react';
import {searchRequest, searchSuccess, searchFailure} from '../../actions/lessonActions';
import {getSerials} from './serialsReducer';
import {connect} from 'react-redux';
import {Textarea} from '../commons/formControls/FormControls';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator} from '../../utils/validators';


let maxLength50 = maxLengthCreator(50);

const Lesson = props => {

    let addNewSearch = values => {
        /*props.searchRequest(values.newSearchBody);*/
    };

    return <div style={{padding: '3vh'}}>
        <h1>Поиск по сериалам</h1>
        <SearchReduxForm onSubmit={addNewSearch}/>
        <div>{props.serials}</div>
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