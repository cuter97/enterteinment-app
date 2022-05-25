import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getData } from '../redux/actions/DataActions'
import DataCard from './DataCard'

const DataContainer = () => {
    const dispatch = useDispatch()
    const data = useSelector(store => store.data.array)
    // const loading = useSelector(store => store.data.loading)

    const [serchParams] = useSearchParams();
    const ruta = serchParams.get("category")

    useEffect(() => {
        
        dispatch(getData())
        
    }, [dispatch])
    
    // if (loading === true) 
    //     return <p>Loading...</p>
    
    const elementos = useMemo(() => {
            
        const filterBrand = (ruta) => { return data.filter(aux => aux.category === ruta) }
        
        return (!ruta) ? data : filterBrand(ruta) 

    }, [ruta,data])

    return (
        <div>
            <div className='title-data-container'>
                {
                    (!ruta) ? <p>Recomended for you</p> : <p>{ruta}</p>
                }
            </div>
            <div className='data-container'>
                {
                    elementos.map((item, index) => (
                        <DataCard key={index} props={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default DataContainer