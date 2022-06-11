import { useState } from "react"
import { FiBookmark } from 'react-icons/fi'
import { useDispatch } from "react-redux"
import { bookmarkAdd } from "../redux/actions/DataActions"

const TrendingCard = ({props}) => {
    const {title, thumbnail, year, rating, category, isBookmarked } = props
    const [bookmark, setBookmark] = useState(isBookmarked)
    const dispatch = useDispatch()
    
    const bookmarkButton = () => {
        setBookmark(!bookmark)
        dispatch(bookmarkAdd(title, bookmark))
    }
    return (
        <div className="card-trending-content">
            <div className="play-container">
                <div className="play">
                    <span className="icon-icon-play" />
                    <p>Play</p>
                </div>
                <img src={thumbnail.trending.large} alt="movie" />
            </div>
            <div className='text-trending-content'>
                <p className='footer-trending-one'>
                    {year}
                    <span className="span">•</span>
                    {(category === 'Movie') ? <span className="icon-icon-category-movie"></span> : <span className="icon-icon-category-tv"></span> } {category} 
                    <span className="span">•</span> 
                    {rating}
                </p>
                <p className='footer-trending-two'>{title}</p>
            </div>
            <div onClick={bookmarkButton} className='btnBookmark'>
                {
                    (isBookmarked === false) ? <FiBookmark className="icon-icon-bookmark-empty" /> : <span className="icon-icon-bookmark-full" />
                }
            </div>
        </div>
    )
}

export default TrendingCard