import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { loginAuth } from '../redux/actions/AuthActions'

import { useForm } from 'react-hook-form'
import { errorsFirebase } from '../utilities/errorsFirebase';
import { formValidate } from '../utilities/formValidates';

import FormError from '../components/FormError';

const Login = () => {

    const { register, handleSubmit, formState: { errors }, setError } = useForm()
    const { required, patternEmail, minLength, validateTrim } = formValidate()

    const user = useSelector(store => store.user.currentUser)
    const firebaseError = useSelector(store => store.user.error)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const onSubmit = data => { dispatch(loginAuth(data.email, data.password)) }

        const { code, message } = errorsFirebase(firebaseError)
        useEffect(() => {
            (user) && navigate('/')

            if (firebaseError !== null) 
                setError(code, {message})
            

        }, [user, navigate, firebaseError])

        return (
            <div className='login-container'>
                <span className='icon-logo logo-center'></span>
                <div className='login-content'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input
                        type="email"
                        placeholder='Email Address'
                        className='input-email'
                        {...register('email',
                            {
                                required, //nombre redundanet required: required
                                pattern: patternEmail
                            })}
                    />
                        <FormError error={errors.email} />

                        <input
                        type="password"
                        placeholder='Password'
                        className='input-password'
                        {...register('password',
                            {
                                minLength,
                                validate: validateTrim,
                            })}
                    />
                        <FormError error={errors.password} />

                        <button className='btn' type='submit'>Login to your account</button>
                    </form>
                    <div className='sign-up'>
                        <p>Don't have account?</p>
                        <Link className='link-sing-up' to='/register'>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
    
            
        )
    }

    export default Login