import {useState} from "react";
import "./ColourBox.css"

function randomChoice(arr){
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function ColourBox({palette}){
    const [colour, setColour] = useState(randomChoice(palette));

    const changeColour = () => {
        setColour(randomChoice(palette));
    }

    return (
        <div
            className="ColourBox"
            onClick={changeColour}
            style={{backgroundColor: colour}}
        />
    )
}

export default ColourBox

