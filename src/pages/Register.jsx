import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { registerInitite } from '../redux/actions/AuthActions';
import { useForm } from 'react-hook-form'
import { errorsFirebase } from '../utilities/errorsFirebase';
import { formValidate } from '../utilities/formValidates';

import FormError from '../components/FormError';

const Register = () => {

    const { register, handleSubmit, formState: { errors }, getValues, setError } = useForm()
    const { required, patternEmail, minLength, validateTrim, validateEquals } = formValidate()

    const user = useSelector(store => store.user.currentUser)
    const errorFirebase = useSelector(store => store.user.error)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = data => {
        dispatch(registerInitite(data.email, data.password))
    }
    
    const { code, message } = errorsFirebase(errorFirebase)
    useEffect(() => {
        if (user)
            navigate('/')

        if (errorFirebase !== null) 
            setError(code, {message})
    }, [user, navigate, errorFirebase])



    return (
        <>
            <div className='register-container'>
                <span className='icon-logo logo-center'></span>
                <div className='login-content'>
                    <h2>Sing Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='error-pos'>
                            <input
                                type="email"
                                placeholder='Email'
                                className='input-email'
                                {...register('email',
                                    {
                                        required, //nombre redundanet required: required
                                        pattern: patternEmail
                                    })}
                            />
                            <div className="errors">
                                <FormError error={errors.email} />
                            </div>
                        </div>
                        
                        <div className='error-password'>
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
                            <div className='errors'>
                                <FormError error={errors.password} />
                            </div>
                        </div>
                        
                        <div className='error-password'>
                            <input
                                type="password"
                                placeholder='Repeat Password'
                                className='input-password pass'
                                {...register('repassword',
                                    {
                                        validate: validateEquals(getValues("password"))
                                    })}
                            />
                            <div className='errors'>
                                <FormError error={errors.repassword} />
                            </div>
                        </div>

                        <button className='btn' type='submit'>Create an account</button>

                        <div className='register'>
                            <p>Alredy have an account?</p>
                            <Link className='link-login' to='/login'>
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register