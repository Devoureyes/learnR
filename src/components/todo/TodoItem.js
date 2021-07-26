import React from "react";
import PropTypes from "prop-types";
import Context from "../../redux/Context";

const styles = {
    li: {
        userSelect: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #f32422',
        borderRadius: '4px',
        marginBottom: '.5rem',
        width: '90%',
    },

    input: {
        cursor: 'pointer',
        marginRight: '1rem',
    },
    button: {
        background: 'red',
        borderRadius: '50%',
        color: '#fff',
        border: 'none',
        padding: '8px 12px 8px 12px',
    },
}

const TodoItem = ({todo, index, onChange}) => {
    const {removeTodo} = React.useContext(Context)

    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return (<li className="li_todo" style={styles.li}>
        <span onClick={() => {onChange(todo.id)}} className={classes.join(' ')}>
            <input
                style={styles.input}
                checked={todo.completed}
                type="checkbox"
                onChange={() => onChange(todo.id)}/>
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
        </span>
        <button onClick={removeTodo.bind(null, todo.id)} style={styles.button}>&times;</button>
    </li>)
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem
