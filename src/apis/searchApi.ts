import axios from "axios";




const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit:5,
        language: 'es',
        access_token:'pk.eyJ1IjoiYWFsbHZpIiwiYSI6ImNsZzVocmg2YjAxeGwzZG5xbWdma3V5YTgifQ.vF7-IC_F2epGnX2zq9g2qA'
    }
})



export default searchApi