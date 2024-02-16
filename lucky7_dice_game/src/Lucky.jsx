import {useState} from "react";
import {getRolls, sum} from "./utils.js";
import Dice from "./Dice.jsx";

function Lucky({ numDice = 1, goal = 5 }){
    const [dice, setDice] = useState(getRolls(numDice));

    const roll = () => setDice(getRolls(numDice));

    const isWinner = sum(dice) === goal

    return(
        <main className="Lucky">
            <h3>{isWinner ? 'You Win!!!' : `Lucky${goal}`}</h3>
            <Dice dice={dice}/>
            <button onClick={roll}>Roll Dice</button>
        </main>
    )
}

export default Lucky