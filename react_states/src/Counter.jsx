import {useState} from "react";

function Counter(){
    let [num, setNum] = useState(0);
    const incrementNum = () => {
        setNum(num + 1);
    }
    return (
        <div>
            <p>The count is : {num}</p>
            <button onClick={incrementNum}>Increase</button>
        </div>
    )
}

export default Counter