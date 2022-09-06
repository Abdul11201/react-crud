import { useEffect, useState } from 'react';
import TodoItem from './TodoItem'

const TodoList = ({todos,getData}) => {
    useEffect(() => {
        getData();
    },[])


    return ( 
        <ul id="todo-list">
            {todos.map((todo,index) => <TodoItem todo={todo} key={todo.id} getData={getData}/>)}
        </ul>
    );
}
 
export default TodoList;