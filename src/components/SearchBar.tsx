import React, { ChangeEvent, useContext, useRef } from 'react'
import '../styles.css'
import { PlacesContext } from '../context'
import { SearchResults } from './SearchResults'

export const SearchBar = () => {
    
    const debounceRef = useRef<any>(null)

    const {searchPlacesByTerm} = useContext(PlacesContext)

    const onQueryChanged = (event:ChangeEvent<HTMLInputElement> ) => {
          
        if(debounceRef.current){
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
                  console.log('debounce value:', event.target.value)
                  searchPlacesByTerm(event.target.value)
        }, 1000);
    }


  return (
    <div  className='search-container' >

        <input type='text' className='form-control' placeholder='Buscar lugar...' onChange={onQueryChanged} />

        <SearchResults/>


    </div>
  )
}
