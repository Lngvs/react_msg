import {useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {addUser} from "../features/user";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const userNameRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()
    const roleRef = useRef()

    const nav = useNavigate()
    const dis = useDispatch()

    const [error, setError] = useState(null)

    function registerUser() {
        let invalid = false

        const user = {
            username: userNameRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value,
            role: roleRef.current.checked

        }
        if(user.username.length < 4 || user.username.length > 20) invalid ="Username has to be between 4 and 20 symbols"
        if(user.passOne.length < 4 || user.passOne.length > 20) invalid = "pass is too short or too long"
        if(user.passOne !== user.passTwo) invalid = "passwords should match"

        if(invalid) return setError(invalid)

        dis(addUser(user))
        nav('/')
    }

    return (
        <div className="d-flex flex-column">
            <input ref={userNameRef} type="text" placeholder="Username"/>
            <input ref={passOneRef} type="text" placeholder="Password"/>
            <input ref={passTwoRef} type="text" placeholder="Password confirmation" />
            <div className='radio'>
            <label  htmlFor="admin"><input ref={roleRef} type="radio" name="Status" value="Admin" id="admin" defaultChecked /> Admin</label>
            
            <label htmlFor="regular"><input ref={roleRef} type="radio" name="Status" value="User" id="user" /> User</label>
        </div>
            {error && <h3>{error}</h3>}
            <button onClick={registerUser}>Register</button>
        </div>
    );
};

export default RegisterPage;