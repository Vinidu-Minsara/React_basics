import {useState, useEffect} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const increment = () => {
        setCount((c) => c + 1);
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    function myEffect(){
        console.log('Effect was called');
    }

    // effect runs after every re-render
    useEffect(myEffect);
    // effect only runs after count is changed
    useEffect(myEffect, [count]);
    // effect only runs initial mount
    useEffect(myEffect, []);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+ 1</button>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={handleChange}/>
        </div>
    )
}

export default Counter