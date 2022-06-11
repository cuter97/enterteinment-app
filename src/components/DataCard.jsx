import { useState } from "react"
import { FiBookmark } from 'react-icons/fi'
import { useDispatch } from "react-redux"
import { bookmarkAdd } from "../redux/actions/DataActions"

const DataCard = ({props}) => {

    const {title, thumbnail, year, rating, category, isBookmarked } = props
    const [bookmark, setBookmark] = useState(isBookmarked)
    const dispatch = useDispatch()
    
    const bookmarkButton = () => {
        setBookmark(!bookmark)
        dispatch(bookmarkAdd(title, bookmark))
    }
    
    return (
        <div className="card-content">
            <div className="play-container">
                <div className="play">
                    <span className="icon-icon-play" />
                    <p>Play</p>
                </div>
                <img src={thumbnail.regular.large} alt="movie" />
            </div>
            <div onClick={bookmarkButton} className='btnBookmark'>
                {
                    (isBookmarked === false) ? <FiBookmark className="icon-icon-bookmark-empty" /> : <span className="icon-icon-bookmark-full" />
                }
            </div>
            <div className='text-content'>
                <p className='footer-one'>
                    {year}
                    <span className="span">•</span>
                    {(category === 'Movie') ? <span className="icon-icon-category-movie"></span> : <span className="icon-icon-category-tv"></span> } {category} 
                    <span className="span">•</span> 
                    {rating}
                </p>
                <p className='footer-two'>{title}</p>
            </div>
        </div>
    )
}

export default DataCard