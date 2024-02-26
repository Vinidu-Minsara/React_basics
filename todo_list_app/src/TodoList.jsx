import List from '@mui/material/List';
import TodoItem from "./TodoItem.jsx";
import {useState} from "react";

const list = [
    {id: 1, text: "walk the dog", completed: false},
    {id: 2, text: "get breakfast", completed: true},
    {id: 3, text: "go to work", completed: false},
    {id: 4, text: "get lunch", completed: false},
];

function TodoList(){
    const [todos, setTodos] = useState(list);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id}/>
            ))}
        </List>
    )
}

export default TodoList