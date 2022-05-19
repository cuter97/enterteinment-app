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
            <h2>Register</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input
                        type="email"
                        placeholder='Email'
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
                        {...register('password',
                            {
                                minLength,
                                validate: validateTrim,
                            })}
                    />
                    <FormError error={errors.password} />

                    <input
                        type="password"
                        placeholder='Repeat Password'
                        {...register('repassword',
                            {
                                validate: validateEquals(getValues("password"))
                            })}
                    />
                    <FormError error={errors.repassword} />

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