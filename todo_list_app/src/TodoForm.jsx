import ListItem from "@mui/material/ListItem";
import {InputAdornment, TextField} from "@mui/material";
import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

function TodoForm({add}){
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        add(text);
        setText("");
    }

    return(
        <ListItem sx={{ display: "flex", justifyContent: "center"}}>
            <form onSubmit={handleSubmit}>
                <Box sx={{ width: "100%" }}>
                    <TextField
                        id="outlined-basic"
                        label="Enter the task"
                        placeholder="walk the dog"
                        variant="outlined"
                        onChange={handleChange}
                        value={text}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" edge="end" type="submit">
                                        <AddIcon />
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </Box>
            </form>
        </ListItem>
    )

}

export default TodoForm