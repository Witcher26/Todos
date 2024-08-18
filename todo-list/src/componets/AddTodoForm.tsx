import {useState} from "react";

interface TProps {
    addTodo: TAddTodo;
}

const AddTodoForm: React.FC<TProps> = ({addTodo}) => {
    const [text, setText] = useState("");

    return (
        <section className="content" style={{margin:"40px", width: "500px"}}>
             <h1>Создание нового дела</h1>
            <form>
                <div className="field">
                <label className="label">Заголовок</label>
                <div className="control">
           
            <input type="text"
                   className="input"
                   value={text}
                   onChange={e => {
                        setText(e.target.value);
                   }}
            />
            <button type="submit"
                    className="button is-success"
                    style={{padding: "20px", marginTop: "20px"}}
                    onClick={e => {
                        e.preventDefault();
                        addTodo(text);
                        setText('');
                    }}
            >
                Add Todo
            </button>
            </div>
            </div>
        </form>

        </section>
    )
}

export default AddTodoForm