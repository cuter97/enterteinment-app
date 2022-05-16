import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { registerInitite } from '../redux/AuthActions';

const Register = () => {

    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
    });

    const user = useSelector(store => store.user.currentUser)

    const dispatch = useDispatch();

    const { displayName, email, password } = state

    const navigate = useNavigate()

    useEffect(() => {
        if (user) 
            navigate('/')
        
    }, [user, navigate])


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerInitite(email, password, displayName))
        setState({displayName: "" ,email:"", password:""})

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    return (
        <>
            <h2>Register</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Name'
                        name='displayName'
                        onChange={handleChange}
                        value={displayName}
                        required
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        name='email'
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <button type='submit'>Sing In</button>
                    <hr />
                    <Link to='/login'>
                        Back
                    </Link>
                </form>
            </div>
        </>
    )
}

export default Register