import React from 'react'
import { BtnMyLocation, MapView, SearchBar } from '../components'
import { ReactLogo } from '../components/ReactLogo'

export const HomeScreen = () => {



  return (
    <div>

        <MapView/>
        <SearchBar/>
        <BtnMyLocation/>
        <ReactLogo/>

    </div>
  )
}
