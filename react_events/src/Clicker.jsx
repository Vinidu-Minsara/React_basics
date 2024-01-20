

function handleHover(){
    alert('hover the button');
}

function Clicker({ buttonText, message }){
    const handleClick = () => {
        alert(message);
    }

    return (
        <div>
            <p>Click the Button</p>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}

export default Clicker