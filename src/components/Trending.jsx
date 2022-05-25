import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import TrendingCard from './TrendingCard'
const Trending = () => {
    const data = useSelector(store => store.data.array)

    const trending = useMemo(() => {
        const isTrue = () => {
            return data.filter(aux => aux.isTrending === true)
        }
        return isTrue()
    }, [data])
    return (
        <div className='trending-container'>
            <h2>Trending</h2>
            <div className='card-trending-container'>
                {
                    trending.map((item, index) => (
                        <TrendingCard key={index} props={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Trending