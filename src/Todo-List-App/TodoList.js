import React from 'react';
import Todo from './Todo';
import './Todo.css'

export default function TodoList({todos, toggleComplete, removeTodo}) {
    return (
        <div className="todo-list-handler">
            <div className="todo-list">
                {todos.map(todo => (
                    <Todo key={todo.id} removeTodo={removeTodo} todo={todo} toggleComplete={toggleComplete}/>
                ))}
            </div>
        </div>
    )
}
