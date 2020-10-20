import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import './Todo.css'

export default function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: ""
    })

    function handleInputChange(e) {
        setTodo({...todo, task: e.target.value})
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuid()})
            setTodo({...todo, task: ""});
        }
    }
    return (
        <div className="todo-form-handler">
        <form onSubmit={handleSubmit}>
            <input className="todo-input" value={todo.task} onChange={handleInputChange} />
            <button className="todo-submit-button" type="submit">&#x2B;</button>
        </form>
        </div>
    )
}
