import React, { useEffect, useState } from 'react'

const Header = ({getData}) => {
    const [title,setTitle] = useState('');


    const addTodo = () => {
        fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title,done:false})
        }).then(() => {
            setTitle('');
            getData();
        })

        
    }


    return ( 
        <div id="todo-header" className="header">
		  <h2>Simple Todo App</h2>
          <div class="input-wrap">
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <span className="add-button" onClick={addTodo}>Add</span>
          </div>
		</div>
    );
}
 
export default Header;
