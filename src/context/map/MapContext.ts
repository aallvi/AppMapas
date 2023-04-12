import { Map } from "mapbox-gl";
import { createContext } from "react";


interface MapContextPRops {
    isMapReady: boolean;
    map?: Map,
    // Metodos
    setMap:(map: Map) => void,
    getRouteBetweenPoints: (start: [number, number], end: [number, number]) => Promise<void>

}

export const MapContext = createContext({ } as MapContextPRops )