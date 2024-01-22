import './App.css'
import ColourBoxGrid from "./ColourBoxGrid.jsx";

function App() {
    const colours = ['#c1121f', '#2a9d8f', '#003566', '#fca311', '#ffb4a2', '#893168', '#38b000', '#cae9ff', '#ff7d00', '#a54c14'];

    return (
        <>
            <ColourBoxGrid palette={colours}/>
            <ColourBoxGrid palette={colours}/>
            <ColourBoxGrid palette={colours}/>
        </>
    )
}

export default App
