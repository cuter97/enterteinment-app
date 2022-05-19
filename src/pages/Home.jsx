// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAuth } from '../redux/actions/AuthActions';
import { useNavigate } from 'react-router-dom'

import DataContainer from '../components/DataContainer'

const Home = () => {

    const user = useSelector(store => store.user.currentUser)
    const navigate = useNavigate()
    
    const dispatch = useDispatch();

    const handleOut = () => {
        if (user)
            dispatch(logoutAuth())
        navigate('/login')
    }

    return (
        <div>
            <div>Home</div>
            <button onClick={handleOut}>Logout</button>
            <div>
                <DataContainer />
            </div>
        </div>
    )
}

export default Home