import React from 'react';

interface IProps {
    todo: ITodo;
    toggleTodo: TToggleTodo;
}

const TodoListItem: React.FC<IProps> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <nav className='navbar is-light' style={{width: "500px"}}>
                
            <label style={{textDecoration: todo.complete ? 'line-through' : undefined}}>
                <input type='checkbox'
                       checked={todo.complete}
                       onClick={() => {
                            toggleTodo(todo);
                       }}/>
                       <div className='navbar-brand content px-6  mt-6'>
                       <span className='navbar-item is-uppercase'>
                    
                        {todo.text}
                       </span>
                       </div>
                    
            </label>
            </nav>
        </li>
    );
}

export default TodoListItem