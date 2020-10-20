import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import './Todo.css'

const LOCAL_STORAGE_KEY = "react-todo-list-todos"

export default function TodoHandler() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const storageItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageItem){
            setTodos(storageItem);
        }
    }, [])
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }
    function toggleComplete(id) {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        })
        );
    }
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id!==id));
    }

    return (
        <div className="todo-handler">
            <h3> Todo App </h3>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete}/>
        </div>
    )
}
