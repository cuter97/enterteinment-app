import Logo from '../icons/logo.svg'
import HomeIcon from '../icons/icon-nav-home.svg'
import MoviesIcon from '../icons/icon-nav-movies.svg'
import TvIcon from '../icons/icon-nav-tv-series.svg'
import BookmarkIcon from '../icons/icon-nav-bookmark.svg'
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
            <img className='logo' src={Logo} alt="logo" />

            <div className='rutes-container'>

                <Link to='/'>
                    <img src={HomeIcon} alt="" />
                </Link>
                <Link to='/?category=Movie'>
                    <img src={MoviesIcon} alt="" />
                </Link>
                <Link to='/?category=TV Series'>
                    <img src={TvIcon} alt="" />
                </Link>
                <Link to='/bookmark'>
                    <img src={BookmarkIcon} alt="" />
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