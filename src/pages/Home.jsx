import { useSearchParams } from 'react-router-dom'
import DataCard from '../components/DataCard';
import DataContainer from '../components/DataContainer'
import Navbar from '../components/Navbar';
import NoSearch from '../components/NoSearch';
import Trending from '../components/Trending';
import { useSearch } from '../hooks/useSearch';

const Home = () => {

    const { search, success, handleChange } = useSearch()

    const [serchParams] = useSearchParams();
    const ruta = serchParams.get("category")

    return (
        <div className='home-container'>
            <Navbar />
            <div>
                <div className='search'>
                    <span className='icon-icon-search' />
                    <input type="text"
                        className='input-search'
                        value={search}
                        onChange={handleChange}
                        placeholder='Search for movies or TV series'
                    />
                </div>
                {
                    (search !== '') 
                        ? 
                        (success !== true) ? 
                        (
                            <>
                                <p className='found-search'>Found {success.length} result for '{search}' </p>
                                <div className='data-container'>
                                    {               
                                        success.map((item, index) => (
                                            <DataCard key={index} props={item} />
                                        ))
                                    }
                                </div>
                            </>
                        ) : (<NoSearch />)
                        :
                        <div>
                            <div>
                                {
                                    (!ruta) && <Trending />
                                }
                            </div>
        
                            <DataContainer />
        
                        </div>
                }

            </div>
        </div>
    )
}

export default Home