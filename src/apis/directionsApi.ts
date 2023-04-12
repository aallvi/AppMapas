import axios from "axios";




const directionsApi = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives:false,
        geometries:'geojson',
        overview:'simplified',
        steps:false,
        access_token:'pk.eyJ1IjoiYWFsbHZpIiwiYSI6ImNsZzVocmg2YjAxeGwzZG5xbWdma3V5YTgifQ.vF7-IC_F2epGnX2zq9g2qA'
    }
})



export default directionsApi