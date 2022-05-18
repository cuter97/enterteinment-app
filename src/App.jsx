import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { auth } from './firebase/firebase-config'
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from './redux/AuthActions';


function App() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user.currentUser)

    const Protected = ({ children }) => {
        if (!user)
            return <Navigate to='/login' />
        return children
    }

    useEffect(() => {
        onAuthStateChanged(auth, (authUser) => {
            if (authUser)
            dispatch(setUser(authUser))
            else
            dispatch(setUser(null))
        })
    }, [dispatch])
    
    if (user === false) {
        return <p>Loading...</p>
    }
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <Protected>
                        <Home />
                    </Protected>
                } />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App