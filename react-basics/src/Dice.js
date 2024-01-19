import "./Dice.css";

export default function Dice() {
  const rool = Math.floor(Math.random() * 6);
  return <h1 className="dice">Die Roll : {rool}</h1>;
}
