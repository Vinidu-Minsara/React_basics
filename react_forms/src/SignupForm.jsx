import {useState} from "react";

function SignupForm(){
    const [user, setUser] = useState({firstname: "", lastname: "", email: ""});

    const handleChange = (event) => {
        const changeField = event.target.name;
        const newValue = event.target.value;

        setUser(currentData => ({
            ...currentData,
            [changeField]: newValue
        }));
    }

    const handleSubmit = () => {
        console.log(user);
    }

    return (
        <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="first name" value={user.firstname} onChange={handleChange} name="firstname"  id="firstName"/>

            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="last name" value={user.lastname} onChange={handleChange} name="lastname" id="lastName"/>

            <label htmlFor="email">Email</label>
            <input type="text" placeholder="last name" value={user.email} onChange={handleChange} name="email"  id="email"/>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default SignupForm