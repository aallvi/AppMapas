import React, { useContext, useLayoutEffect, useRef } from 'react'
import { MapContext, PlacesContext } from '../context'
import { Loading } from './Loading'
import mapboxgl from 'mapbox-gl'


export const MapView = () => {


  const {userLocation,isLoading}  =  useContext(PlacesContext)
  const {setMap,map,isMapReady}  =  useContext(MapContext)

  const mapDiv = useRef<HTMLDivElement> (null)

  useLayoutEffect(() => {
   
    if(!isLoading){

        const map = new mapboxgl.Map({
            container: mapDiv.current!, // container ID
            style: 'mapbox://styles/mapbox/light-v10', // style URL
            center: userLocation, // starting position [lng, lat]
            zoom: 14, // starting zoom
            });

        setMap(map)

    }

  }, [isLoading])

  console.log(userLocation,'userLocation')

  if(isLoading){

    return (<Loading/>)
  }


  return (
    <div ref={mapDiv}
    style={{
    
        height:'100vh',
        width:'100vw',
        position:'fixed',
        top:0,
        left:0

    }}
    >
 
      {userLocation?.join(',') }

    </div>
  )
}
