import {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "../features/user";

const LoginPage = () => {
    const userNameRef = useRef()
    const passRef = useRef()

    const nav = useNavigate()
    const dis = useDispatch()

    const users = useSelector(state => state.user.value.users)
    const [error, setError] = useState(null)

    function loginUser() {
        const user = {
            username: userNameRef.current.value,
            password: passRef.current.value,
        }

        const userLoggedIn = users.find(x => x.username === user.username && x.password === user.password)
        if(!userLoggedIn) return setError("bad credentials provided")

        dis(setCurrentUser(userLoggedIn))

        nav('/profile')
    }

    return (
        <div className="d-flex flex-column">
            <input ref={userNameRef} type="text" placeholder="Username"/>
            <input ref={passRef} type="text" placeholder="password"/>
            {error && <h3>{error}</h3>}
            <button onClick={loginUser}>Login</button>
        </div>
    );
};

export default LoginPage;