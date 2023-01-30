import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo }) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
            // key allows react to rerender the components that actually change inside of our array instead of rerendering everything all at the same time
        })
    )
}
