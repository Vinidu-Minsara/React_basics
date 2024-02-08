import {useState} from "react";

function  CounterWithUpdate(){
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount((currentCount) => currentCount + 1); // using update function
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);

        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
    };

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={incrementCount}>+1</button>
        </div>
    )
}

export default CounterWithUpdate