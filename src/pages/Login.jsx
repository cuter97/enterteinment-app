import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { loginAuth } from '../redux/AuthActions'

const Login = () => {

    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const user = useSelector(store => store.user.currentUser)

    const dispatch = useDispatch();

    const navigate = useNavigate()

    useEffect(() => {
        if (user) 
            navigate('/')
        
    }, [user, navigate])

    const { email, password } = state

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email || !password)
            return
        dispatch(loginAuth(email, password))
        setState({ email: "", password: "" })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    return (
        <>
            <h2>LOGIN</h2>
            <div>
                <form onSubmit={handleSubmit}>
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
                    <p>Don't have account?🤨</p>
                    <Link to='/register'>
                        Register
                    </Link>
                </form>
            </div>
        </>
    )
}

export default Login