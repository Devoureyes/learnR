import React from 'react'
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

const TodoList = ({todos, onToggle}) => {
    return (
        <ul style={styles.ul}>
            {todos.map((todo, index) => {
                return <TodoItem key={todo.id} todo={todo} onChange={onToggle} index={index}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default React.memo(TodoList);
