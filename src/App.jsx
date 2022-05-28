import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Bookmark from './pages/Bookmark';

import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { auth } from './firebase/firebase-config'
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from './redux/actions/AuthActions';

import './styles/style.scss'
import { getData } from './redux/actions/DataActions';

function App() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user.currentUser)
    const loading = useSelector(store => store.data.loading)


    const Protected = () => {
        if (!user)
            return <Navigate to='/login' />
        return (<div><Outlet/></div>)
    }

    useEffect(() => {
        dispatch(getData())

        onAuthStateChanged(auth, (authUser) => {
            if (authUser)
            dispatch(setUser(authUser))
            else
            dispatch(setUser(null))
        })
    }, [dispatch])
    
    if (user === false) 
        return <p>Loading...</p>

    if (loading === true) 
        return <p>Loading...</p>
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Protected />}>
                    <Route index element={<Home />} />
                    <Route path='bookmark' element={<Bookmark />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App