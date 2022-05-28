import React, { useMemo } from 'react'
import Navbar from '../components/Navbar'

import { useSelector } from 'react-redux'
import DataCard from '../components/DataCard'

const Bookmark = () => {

    const data = useSelector(store => store.data.array)

    const bookmark = useMemo(() => {
        const isBookmark = () => {
            return data.filter(aux => aux.isBookmarked === true)
        }
        return isBookmark()
    }, [data])

    return (
        <div style={{ display: 'flex' }}>
            <Navbar />
            <div>
                <p>bookmark</p>
                {
                    bookmark.map((item, index) => (
                        <DataCard key={index} props={item} />
                    ))
                }
            </div>

        </div>
    )
}

export default Bookmark