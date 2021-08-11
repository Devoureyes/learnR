import React from 'react';
import {setSerials} from '../../actions/lessonActions';
import {getSerials} from './serialsReducer';
import {connect} from 'react-redux';
import {Textarea} from '../commons/formControls/FormControls';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator} from '../../utils/validators';
let maxLength50 = maxLengthCreator(50);

// eslint-disable-next-line import/no-anonymous-default-export
const Lesson = props => {

    const [search,setSearch] = React.useState('')

    React.useEffect(() => {
        props.setSerials(search)
    })

    let addNewSearch = values => {
        setSearch(values.newSearchBody)
    }

    return <div style={{padding: '3vh'}}>
        <h1>Поиск по сериалам</h1>
        <SearchReduxForm onSubmit={addNewSearch}/>
    </div>
}

const mstp = state => ({
    serials: getSerials(state)
})

const mdtp = {
    setSerials
}

const SearchForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} validate={[maxLength50]} name="newSearchBody" placeholder="Find a serial..."/>
        <button>Send</button>
    </form>
}

const SearchReduxForm = reduxForm({
    form: 'serialSearchForm'
})(SearchForm)
export default connect(mstp,mdtp)(Lesson)