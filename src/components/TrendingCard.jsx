const TrendingCard = ({props}) => {
    const {title, thumbnail, year, rating, category } = props
    return (
        <div className="card-trending-content">
            <img src={thumbnail.trending.large} alt="movie" />
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
        </div>
    )
}

export default TrendingCard