import diceOne from "./assets/dice-1.png"
import diceTwo from "./assets/dice-2.png"
import diceThree from "./assets/dice-3.png"
import diceFour from "./assets/dice-4.png"
import diceFive from "./assets/dice-5.png"
import diceSix from "./assets/dice-6.png"
import "./Die.css"

function Die({ val }) {

    const getImage = () => {
        const images = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
        return images[val - 1] || null;
    };

    const image = getImage();

    return (
        <>
            <img src={image} alt="Die image" />
        </>
    );
}

export default Die;
