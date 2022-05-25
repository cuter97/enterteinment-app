import Avatar from '../icons/image-avatar.png'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAuth } from '../redux/actions/AuthActions';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const user = useSelector(store => store.user.currentUser)
    const navigate = useNavigate()
    
    const dispatch = useDispatch();

    const handleOut = () => {
        if (user)
            dispatch(logoutAuth())
        navigate('/login')
    }

    const [toggle, SetToggle] = useState(false)

    const handleToggler = () => {SetToggle(!toggle)}

    return (
        <div className='nav-container'>
            <div className='logo'>
                <span className="icon-logo"></span>
            </div>

            <div className='rutes-container'>

                <Link to='/'>
                    <span className="icon-icon-nav-home"></span>
                </Link>

                <Link to='/?category=Movie'>
                    <span className="icon-icon-nav-movies"></span>
                </Link>

                <Link to='/?category=TV Series'>
                    <span className="icon-icon-nav-tv-series"></span>
                </Link>

                <Link to='/bookmark'>
                    <span className="icon-icon-nav-bookmark"></span>
                </Link>
            
            </div>

            <div className='avatar-container' onClick={handleToggler}>
                <img className='avatar' src={Avatar} alt="" />
                <div className={toggle === true ? 'list active' : 'list'}>
                    <p>Profile</p>
                    <button onClick={handleOut}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar