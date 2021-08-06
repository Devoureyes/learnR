import React from 'react';
import TodoList from "./TodoList";
import Context from "../../redux/Context";
//import AddTodo from "./AddTodo";
import Loader from "./Loader";
import Modal from "./modal/Modal";

const styles = {
    h1: {margin: 0},
    h3: {fontSize: '50px',color: '#d5f51f', userSelect: 'none'}
}
const AddTodo = React.lazy(() => import('./AddTodo'))

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    React.useEffect(() => {
        fetch('http://fearset.xyz/api/test')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
                setLoading(false)
            })

        return () => console.log(123);
    },[]);

    let [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const toggleTodo = React.useCallback(id => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }));
    }, [todos]);

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
        <div className="todo_page">
            <h1 style={styles.h1}>Todo tutorial</h1>
            <Modal />
            <React.Suspense fallback={<p>Loading...</p>}>
                <AddTodo onCreate={addTodo}/>
            </React.Suspense>
            {loading && <Loader type={1}/>}
            {todos.length ?
                (<TodoList todos={todos} onToggle={toggleTodo}/>)
                :
                loading ? null :(<h3 style={styles.h3}>No TODO's</h3>)
            }
        </div>
    </Context.Provider>)
}

