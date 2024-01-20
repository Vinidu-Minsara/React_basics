function handleForm(e){
    e.preventDefault();
}

function Form(){
    return (
        <form onSubmit={handleForm}>
            <button>Submit</button>
        </form>
    )
}

export default Form