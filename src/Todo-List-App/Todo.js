import React from 'react';
import './Todo.css'

export default function Todo({todo, toggleComplete, removeTodo}) {
    var crossStyle = {
        textDecoration: todo.completed ? "line-through" : null 
    };
    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }
    function deleteTodo(){
        removeTodo(todo.id);
    }
    return (
        <div className="todo">
            <input className="todo-complete" type="checkbox" onClick={handleCheckboxClick}></input>
            <div className="todo-text" style={crossStyle}>{todo.task}</div>
            <button className="todo-delete" onClick={deleteTodo}>&#10006;</button> 
        </div>
    )
}
