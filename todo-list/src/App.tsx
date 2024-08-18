import React, {useState, useLayoutEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
    fakeApiRequest
} from './utils';

import {
    TodoList,
    AddTodoForm
} from './componets';

import "./styles.css";

const emptyOjb = {
    text: '',
    complete: false,
    id: ""
};

function App() {
    const [todos, setTodos] = useState<ITodo[]>([emptyOjb]);

    useLayoutEffect(() => {
        fakeApiRequest()
            .then(values => setTodos(values));
    }, [])

    const toggleTodo = ({id}: ITodo) => {
        const _todos = todos.map(todo => todo.id === id
            ? ({...todo, complete: !todo.complete})
            : todo
        );
        setTodos(_todos);
    };

    const addTodo: TAddTodo = (text: string) => {
        const newTodo = {
            text,
            id: uuidv4(),
            complete: false,
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div className='main-content'>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <AddTodoForm addTodo={addTodo}/>
        </div>
    );
}

export default App;