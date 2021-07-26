import React from "react";
import PropTypes from "prop-types";

function useInputVale(defaultValue = '') {
    const [value, setValue] = React.useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

const AddTodo = ({onCreate}) => {
    const input = useInputVale('')


    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <label className="field field_v3">
                <input className="field__input" placeholder="Введите новую задачу" {...input.bind}/>
                <span className="field__label-wrap">
                    <span className="field__label">TODO</span>
                </span>
            </label>
            <button type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo