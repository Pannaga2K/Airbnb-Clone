import { useState } from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';
import "mapbox-gl/dist/mapbox-gl.css";

function Maps({searchResults}) {

    const [selectedLocation, setSelectedLocation] = useState({});
    const [isPopupShown, setIsPopupShown] = useState(false);

    const coordinates = searchResults?.map((sR) => ({
        longitude: sR.long,
        latitude: sR.lat,
    }))

    const center = getCenter(coordinates);
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "500px",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8
    });

    console.log(selectedLocation);

    const handleClick = (result) => {
        setSelectedLocation(result)
        setIsPopupShown(true);
    }

    return (
        <Map mapStyle="mapbox://styles/pannx/claqgcdb7004i14o6tzwst8oy" initialViewState={{bearing: 0, pitch: 0}} mapboxAccessToken={process.env.MAPBOXKEY} {...viewport} onMove={(moved) => setViewport(moved.viewState)} >
            {searchResults.map((result, index) => (
                <div key={index} >
                    <Marker onClick={() => handleClick(result)} longitude={result.long} latitude={result.lat} className="text-red-400" >
                        <svg role="icon" aria-label='push-pin' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer animate-bounce">
                            <path stroke="rgb(248, 113, 113)" fill='rgb(248, 113, 113)' strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            <path stroke="rgb(248, 113, 113)" fill='white' strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </Marker>
                    {selectedLocation.long == result.long && isPopupShown ? (
                        <Popup className='text-white bg-black ' closeButton={false} closeOnClick={false} onClose={() => setSelectedLocation({})} longitude={result.long} latitude={result.lat} >
                            <p onClick={() => setIsPopupShown(false)} >{result.title}</p>
                        </Popup>
                    ) : (
                        false
                    )} 
                </div>
            ))}
        </Map>
    )
}

export default Maps;