import ColourBox from "./ColourBox.jsx";
import  "./ColourBoxGrid.css"

function ColourBoxGrid({palette}){
    return(
        <div className="ColourBoxGrid">
            <ColourBox palette={palette}/>
            <ColourBox palette={palette}/>
            <ColourBox palette={palette}/>
            <ColourBox palette={palette}/>
            <ColourBox palette={palette}/>
        </div>
    )
}

export default ColourBoxGrid