import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/actions/DataActions'

const DataContainer = () => {
    const dispatch = useDispatch()
    const data = useSelector(store => store.data.array)
    const loading = useSelector(store => store.data.loading)

    useEffect(() => {

        dispatch(getData())

    }, [dispatch])

    if (loading === true) {
        return <p>Loading...</p>
    }

    return (
        <div>
            {
                data.map(item => (
                    <p key={item.title} > {item.title} </p>
                ))
            }
        </div>
    )
}

export default DataContainer