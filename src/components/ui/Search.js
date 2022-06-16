import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useForm } from '../../Hooks/useForm'

export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {searchText, onInputChange}= useForm( {
        searchText: ''
    })

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if(searchText.trim().length <= 1) return;

        navigate(`?q=${ searchText.toLowerCase().trim() }`)

     }

  return (
    <div>
        <form onSubmit={onSearchSubmit}>
            <input
            type='text'
            name='searchText'
            placeholder='Buscar'
            autoComplete='off'
            value={searchText}
            onChange={onInputChange}
            >
            </input>
            <button>Buscar</button>
        </form>

    </div>
  )
}
