import {TextField} from "@mui/material";
import {useState} from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

function FormDemo() {
    const [name, setName] = useState("");
    const [volume, setVolume] = useState(0);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    }

    return <>
        <Box sx={{ border: "1px solid red", p: 5, width: 300, margin: "auto"}}>
            <h3>Name is : {name}</h3>
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                placeholder="name"
                value={name}
                onChange={nameChangeHandler}
            />
            <h3>Volume : {volume}</h3>
            <Box sx={{width: 200}}>
                <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                    <VolumeDown/>
                    <Slider aria-label="Volume" value={volume} onChange={handleVolumeChange}/>
                    <VolumeUp/>
                </Stack>
            </Box>
        </Box>
    </>
}

export default FormDemo