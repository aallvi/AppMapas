import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MapsApp } from './MapsApp'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWFsbHZpIiwiYSI6ImNsZzVocmg2YjAxeGwzZG5xbWdma3V5YTgifQ.vF7-IC_F2epGnX2zq9g2qA';



if(!navigator.geolocation){
  alert('tu navegador no tiene geolocation activa')
  throw new Error('tu navegador no tiene geolocation activa');
  
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MapsApp/>
  </React.StrictMode>,
)
