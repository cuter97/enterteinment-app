import { useState } from "react"
import { FiBookmark } from 'react-icons/fi'

const DataCard = ({props}) => {

    const [bookmark, setBookmark] = useState(false)

    const bookmarkButton = () => {
        setBookmark(!bookmark)
    }

    const {title, thumbnail, year, rating, category } = props
    return (
        <div className="card-content">
            <img src={thumbnail.regular.large} alt="movie" />
            <div onClick={bookmarkButton} className='btnBookmark'>
                {
                    (bookmark === false) ? <FiBookmark className="icon-icon-bookmark-empty" /> : <span className="icon-icon-bookmark-full" />
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