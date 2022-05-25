import { useSearchParams } from 'react-router-dom'

import DataContainer from '../components/DataContainer'
import Navbar from '../components/Navbar';
import Trending from '../components/Trending';

const Home = () => {

    const [serchParams] = useSearchParams();
    const ruta = serchParams.get("category")

    return (
        <div className='home-container'>
            <Navbar />
            <div>
                {
                    (!ruta) && <Trending />
                }
                <div>
                    <DataContainer />
                </div>
            </div>
        </div>
    )
}

export default Home