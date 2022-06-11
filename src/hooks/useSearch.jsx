import { useState } from 'react'
import { useSelector } from 'react-redux'

export const useSearch = () => {

    const data = useSelector(store => store.data.array)

    const [search, setSearch] = useState('')
    const [success, setSuccess] = useState(false)

    const handleChangeBookmarked = (e) => {
        setSearch(e.target.value)
        filteredBookmarked(e.target.value)
    }

    const filteredBookmarked = (value) => {

        let result = data.filter(element => {
            if( element.title.toString().toLowerCase().includes(value.toLowerCase()) && element.isBookmarked === true)
                return element
        })
        return (result.length !== 0) ? setSuccess(result) : setSuccess(true)
    }

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

    return {
        search,
        success,
        handleChange,
        handleChangeBookmarked,
    }
}