import React from 'react';
import TodoList from "./TodoList";
import Context from "../../redux/Context";
import AddTodo from "./AddTodo";

const styles = {
    h1: { margin: 0},
    h3: { color: '#d5f51f'}
}



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    React.useEffect(() => {
        /*http://mepnew/api/test*/
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then(todos => {
            setTodos(todos)
        })
    })

    let [todos, setTodos] = React.useState([
        { id: 1, completed: false, title: 'Купить молоко'},
        { id: 2, completed: true, title: 'Купить хлеб'},
        { id: 3, completed: false, title: 'Купить масло'},
    ])

    function toggleTodo (id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

    return (<Context.Provider value={{removeTodo}}>
        <div>
            <h1 style={styles.h1}>Todo tutorial</h1>
            <AddTodo onCreate={addTodo}/>
            {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <h3 style={styles.h3}>No TODO's</h3> }
        </div>
    </Context.Provider>)
}

