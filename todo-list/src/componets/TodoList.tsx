import React from 'react';
import {TodoListItem} from './index';

interface IProps {
    todos: ITodo[];
    toggleTodo: TToggleTodo;
}

const TodoList: React.FC<IProps> = ({todos, toggleTodo}) => {
    return (
        <ul>
            <div className='content px-6 mt-6'>
            {todos.map(todo => (
                <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo}/>
            ))}
            </div>
        </ul>
    )
};

export default TodoList;