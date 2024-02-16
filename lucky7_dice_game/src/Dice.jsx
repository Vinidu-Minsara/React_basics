import Die from "./Die.jsx";
import "./Dice.css"

function Dice({ dice }){

    return (
        <section className="Dice">
            {dice.map((val,i) => (
                <Die key={i} val={val}/>
            ))}
        </section>
    )
}

export default Dice