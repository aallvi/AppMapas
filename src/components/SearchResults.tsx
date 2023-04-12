import React, { useContext, useState } from 'react'
import { MapContext, PlacesContext } from '../context'
import { LoadingPLaces } from './LoadingPLaces'
import { Feature } from '../interfaces/places'

export const SearchResults = () => {

  const {isLoadingPlaces,places,userLocation} = useContext(PlacesContext)

  const {map,getRouteBetweenPoints} = useContext(MapContext)

  const [activeId, setActiveId] = useState('')

  const getRoute = (place:Feature) => {

     if(!userLocation) return;

     const [lng,lat] = place.center

        
    getRouteBetweenPoints(userLocation,[lng,lat])

  }


  const onPLaceClicked = (place:Feature) =>{
      setActiveId(place.id)

      const [lng,lat] = place.center
      map?.flyTo({
        zoom:14,
        center: [lng,lat]
      })

  }

  if(isLoadingPlaces) {
    return (
    <LoadingPLaces/>
    )
  }

  if(places.length === 0 ){
    return <></>
  }

  return (
    <ul className='list-group mt-3 ' >

      {
        places.map( place => (
          <li
        key={place.id}
        className={`list-group-item list-group-item-action pointer  ${activeId === place.id ? 'active' : '' } `}
        onClick={ () => onPLaceClicked(place) }
        >

            <h6> {place.text_es} </h6>
            <p className='' style={{fontSize:'12px'}} >
                {place.place_name}

            </p>

            <button onClick={ () => getRoute(place)}  className={`btn btn-sm ${activeId === place.id  ? 'btn-outline-light' : 'btn-outline-primary' } `} >
                Direcciones
            </button>

        </li>
        ))
      }



    </ul>
  )
}
