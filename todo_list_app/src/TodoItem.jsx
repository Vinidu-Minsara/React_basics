import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from '@mui/icons-material/Delete';


// eslint-disable-next-line react/prop-types
function  TodoItem({todo, remove, toggle}){
    const removeTodo = () => {
        remove(todo.id);
    }

    const labelId = `checkbox-list-label-${todo.id}`;

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} ense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={toggle}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.text} />
            </ListItemButton>
        </ListItem>
    );
}

export default TodoItem