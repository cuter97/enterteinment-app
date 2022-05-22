import { useSearchParams } from 'react-router-dom'

import DataContainer from '../components/DataContainer'
import Navbar from '../components/Navbar';

const Home = () => {

    const [serchParams] = useSearchParams();
    const ruta = serchParams.get("category")

    return (
        <div className='home-container'>
            <Navbar />
            <div>
                {
                    (!ruta) && <p>aca va el componente trending</p>
                }
                <div>
                    <DataContainer />
                </div>
            </div>
        </div>
    )
}

export default Home