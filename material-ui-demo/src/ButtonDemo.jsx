import {Button} from "@mui/material";

function ButtonDemo(){
    return (
        <>
            <Button variant="contained"
                    onClick={() => {
                        alert('Clicked');
                    }}>Contained</Button>

            <Button variant="text" color="warning">Contained</Button>
            <Button variant="outlined" color="error">Contained</Button>
            <Button variant="contained" color="secondary">Contained</Button>
        </>
    )
}

export default ButtonDemo