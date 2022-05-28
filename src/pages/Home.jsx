import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import DataCard from '../components/DataCard';
import DataContainer from '../components/DataContainer'
import Navbar from '../components/Navbar';
import Trending from '../components/Trending';

const Home = () => {

    const [serchParams] = useSearchParams();
    const ruta = serchParams.get("category")

    const data = useSelector(store => store.data.array)

    const [search, setSearch] = useState('')
    const [success, setSuccess] = useState([])
    const [flag, setFlag] = useState(false)

    const handleChange = (e) => {
        setSearch(e.target.value)
        filtered(search)

        if (success.length !== 0)
            setFlag(true)
    }
    
    const filtered = (value) => {

        let result = data.filter(element => {
            if(element.title.toString().toLowerCase().includes(value.toLowerCase()))
                return element
        })
        setSuccess(result)
    }

    return (
        <div className='home-container'>
            <Navbar />
            <div>

                <input type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder='Search for movies or TV series'
                />
                {
                    (search !== '') ? ( 

                        (flag !== false) ?
                        success.map((item, index) => (
                            <DataCard key={index} props={item} />
                        ))
                        :
                        <p>no existe ese valor</p>
                            
                    )
                    :
                    <div>
                        {
                            (!ruta) && <Trending />
                        }
                        <div>
                            <DataContainer />
                        </div>
                    </div>
                }


            </div>
        </div>
    )
}

export default Home