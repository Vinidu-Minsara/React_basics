import {useState} from "react";

function CricketScoreBoard(){
    const [state, setState] = useState({score: 0, wickets: 0, balls: 0});

    const increaseScore = (s) => {
        setState({...state, score: state.score + s, balls: state.balls + 1});
    }

    const increaseWicket = () => {
        setState({...state, wickets: state.wickets + 1, balls: state.balls + 1});
    }

    const calculateOvers = () => {
        const overs = Math.floor(state.balls / 6);
        const ballsRemaining = state.balls % 6;
        return `${overs}.${ballsRemaining}`;
    }

    const reset = () => {
        setState({score: 0, wickets: 0, balls: 0});
    }

    return(
        <div>
            <div>
                <h1>{state.score} - {state.wickets}</h1>
                <h2>Overs {state.balls < 6 ? `0.${state.balls}`: calculateOvers() }</h2>
            </div>
            <div>
                <button style={{margin: 5}} onClick={() => increaseScore(0)}>Dot</button>
                <button style={{margin: 5}} onClick={() => increaseScore(1)}>+1</button>
                <button style={{margin: 5}} onClick={() => increaseScore(2)}>+2</button>
                <button style={{margin: 5}} onClick={() => increaseScore(3)}>+3</button>
                <button style={{margin: 5}} onClick={() => increaseScore(4)}>+4</button>
                <button style={{margin: 5}} onClick={() => increaseScore(6)}>+6</button>
            </div>
            <div>
                <button style={{marginTop: 20, marginBottom: 20}} onClick={() => increaseWicket()}>wicket</button>
            </div>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default CricketScoreBoard;