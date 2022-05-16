// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAuth } from '../redux/AuthActions';
import { useNavigate } from 'react-router-dom'



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
    </div>
  )
}

export default Home