import './App.css'
import Lucky from "./Lucky.jsx";

function App() {

  return (
    <>
        <Lucky/>
        <Lucky numDice={2} goal={7}/>
        <Lucky numDice={3} goal={12}/>
    </>
  )
}

export default App
