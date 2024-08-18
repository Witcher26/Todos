interface ITodo {
    text: string;
    complete: boolean;
    id: string;
}

type TToggleTodo = (selectedTodo: ITodo) => void;

type TAddTodo = (text: string) => void;