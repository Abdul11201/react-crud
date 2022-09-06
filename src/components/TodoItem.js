
const TodoItem = ({todo,getData}) => {
    const updateTodo = () => {
        fetch(`http://localhost:8000/todos/${todo.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title:todo.title,done:!todo.done})
        }).then(() => getData())
    }

    const deleteTodo = () => {
        fetch(`http://localhost:8000/todos/${todo.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title:todo.title,done:!todo.done})
        }).then(() => getData())
    }
    
    
    return (
        <div>
            <li className={todo.done ? 'done' : ''} onClick={updateTodo}>{todo.title} </li>
            <span className="close" onClick={deleteTodo}>x</span>
        </div> 
    );
}
 
export default TodoItem;