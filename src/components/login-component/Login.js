import './Login.css'
import {useState } from 'react'
const Login = () =>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const showFullName = () =>{
        alert(firstName +' '+ lastName)
    }
    const handleFirstNameChange = event => {
        setFirstName(event.target.value)
    }
    const handleLastNameChange = event => {
        setLastName(event.target.value)
    }
    return(
        <div className="login">
            <form>
                <input  type="text" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} />
                <input  type="text" placeholder="Last Name" value={ lastName } onChange={handleLastNameChange}/>
                <button onClick={ showFullName }>Greet Me</button>
            </form>
        </div>
    )
}

export default Login