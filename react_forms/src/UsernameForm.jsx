import {useState} from "react";

function UsernameForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const updateFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const updateLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleSubmit = () => {
        console.log(firstName, lastName);
    }

    return (
        <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="first name" value={firstName} onChange={updateFirstName} id="firstName"/>

            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="last name" value={lastName} onChange={updateLastName} id="lastName"/>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )

}

export default UsernameForm