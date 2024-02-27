import List from '@mui/material/List';
import TodoItem from "./TodoItem.jsx";
import {useState, useEffect} from "react";
import TodoForm from "./TodoForm.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    return (data) ? data : [];
}

function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed};
                } else {
                    return todo;
                }
            });
        });
    }

    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, {id: crypto.randomUUID(), text: text, completed: false}];
        });
    }

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    return (
        <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", m: 10}}>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                Todo List
            </Typography>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <TodoForm add={addTodo} style={{width: "100%"}}/>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} remove={removeTodo} toggle={() => toggleTodo(todo.id)}/>
                ))}
            </List>
        </Box>
    )
}

export default TodoList