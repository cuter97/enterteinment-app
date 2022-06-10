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
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        setSearch(e.target.value)
        filtered(e.target.value)
    }
    
    const filtered = (value) => {

        let result = data.filter(element => {
            if(element.title.toString().toLowerCase().includes(value.toLowerCase()))
                return element
        })
        return (result.length !== 0) ? setSuccess(result) : setSuccess(true)
    }

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
                            <div className='data-container'>
                                {                
                                    success.map((item, index) => (
                                        <DataCard key={index} props={item} />
                                    ))
                                }
                            </div>
                        ) : (<p>no existe ese valor</p>)//falta agreagar hacer un componente cuando no hay ningun resulatado
                        :
                        <div className='home-content'>
                            {
                                (!ruta) && <Trending />
                            }
        
                            <DataContainer />
        
                        </div>
                }

            </div>
        </div>
    )
}

export default Home