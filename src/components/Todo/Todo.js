import './Todo.css'

import React from 'react';
import {useState} from 'react';

const Todo = ({ todo, toggleTodo, removeTodo }) => {
    return (
        <li
            className={todo.done ? "todo done" : "todo"}
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
        >
            <div>
                <input className="checkbox"
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id)}
                />
                {todo.text}
            </div>

            <svg className="delete" onClick={e => {
                e.stopPropagation();
                removeTodo(todo.id);
            }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z" stroke="#CDCDCD"/>
                <path d="M14.625 3.75H3.375" stroke="#CDCDCD" stroke-linecap="round"/>
                <path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" stroke="#CDCDCD"/>
                <path d="M10.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/>
                <path d="M7.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/>
            </svg>
        </li>
    );
};

export default Todo;