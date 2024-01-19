import "./styles.css";
import Greeter from "./Greeter";
import Dog from "./Dog";
import LoginForm from "./LoginForm";
import DiceRoll from "./DiceRoll";

export default function App() {
  return (
    <div className="App">
      <Greeter />
      <Dog />
      <LoginForm />
      <DiceRoll />
    </div>
  );
}
