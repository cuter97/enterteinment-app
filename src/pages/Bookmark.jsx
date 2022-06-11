import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import Navbar from '../components/Navbar'
import DataCard from '../components/DataCard'
import { useSearch } from '../hooks/useSearch'
import NoSearch from '../components/NoSearch'
const Bookmark = () => {

    const data = useSelector(store => store.data.array)

    const bookmark = useMemo(() => {
        const isBookmark = () => {
            return data.filter(aux => aux.isBookmarked === true)
        }
        return isBookmark()
    }, [data])

    const { search, success, handleChangeBookmarked } = useSearch()

    return (
        <div style={{ display: 'flex' }}>
            <Navbar />
            <div>
                <div className='search'>
                    <span className='icon-icon-search' />
                    <input type="text"
                        className='input-search'
                        value={search}
                        onChange={handleChangeBookmarked}
                        placeholder='Search for movies or TV series'
                    />
                </div>
                {
                    (search !== '') 
                    ? 
                        (success !== true) 
                        ? 
                        (
                            <>
                                <p className='found-search'>Found {success.length} result for '{search}'</p>
                                <div className='data-container'>
                                    {                
                                        success.map((item, index) => (
                                            (item.isBookmarked === true) && <DataCard key={index} props={item} />
                                        ))
                                    }
                                </div>
                            </>
                        )
                        : 
                        (<NoSearch />)
                    :
                    (
                        <div>  
                            <div>
                                <p className='title-bookmark'>Bookmark Movies</p>
                                <div className='data-container'>
                                    {
                                        bookmark.map((item, index) => (
                                            (item.category === 'Movie') && <DataCard key={index} props={item} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <p className='title-bookmark'>Bookmark TV Series</p>
                                <div className='data-container'>
                                    {
                                        bookmark.map((item, index) => (
                                            (item.category === 'TV Series') && <DataCard key={index} props={item} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Bookmark