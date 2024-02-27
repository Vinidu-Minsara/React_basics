import List from '@mui/material/List';
import TodoItem from "./TodoItem.jsx";
import {useState, useEffect} from "react";
import TodoForm from "./TodoForm.jsx";

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    return (data) ? data : [];
}

function TodoList(){
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map((todo) => {
                if (todo.id === id){
                    return { ...todo, completed: !todo.completed };
                }else {
                    return todo;
                }
            });
        });
    }

    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [... prevTodos, { id: crypto.randomUUID(), text: text, completed: false}];
        });
    }

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <TodoForm add={addTodo}/>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} remove={removeTodo} toggle={() => toggleTodo(todo.id)}/>
            ))}
        </List>
    )
}

export default TodoList