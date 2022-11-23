import { useEffect, useState } from 'react';
import Map, { Marker, Popup, NavigationControl, GeolocateControl, FullscreenControl, ScaleControl } from 'react-map-gl';
import { getCenter } from 'geolib';
import "mapbox-gl/dist/mapbox-gl.css";

function Maps({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({});
    const [isPopupShown, setIsPopupShown] = useState(false);
    const [viewport, setViewport] = useState({});
    const [previousSelectedLocation, setPreviousSelectedLocation] = useState(null);

    const coordinates = searchResults?.map((sR) => ({
        longitude: sR.long,
        latitude: sR.lat,
    }));
    const center = getCenter(coordinates);;

    useEffect(() => {
        setViewport({
            width: "100%",
            height: "500px",
            latitude: selectedLocation.lat ? selectedLocation.lat : center.latitude,
            longitude: selectedLocation.long ? selectedLocation.long : center.longitude,
            zoom: viewport?.zoom ? viewport.zoom : 8
        });
    }, [selectedLocation]);

    const handleClick = (result, index) => {
        setSelectedLocation(result)
        setIsPopupShown(true);
        center = getCenter({
            longitude: selectedLocation.long,
            latitude: selectedLocation.lat
        });
        let currentElement = document.getElementById(`infoCard__index${index}`);
        currentElement.scrollIntoView({behavior: 'smooth', block: "center"});
        if(previousSelectedLocation) {
            let previousElement = document.getElementById(`infoCard__index${previousSelectedLocation}`)
            previousElement.classList.remove("cardSelected");
        }
        currentElement.classList.add("cardSelected");
        setPreviousSelectedLocation(index);
    }

    return (
        <Map className="transition duration-200 ease-in-out" mapStyle="mapbox://styles/pannx/claqgcdb7004i14o6tzwst8oy" mapboxAccessToken={process.env.MAPBOXKEY} {...viewport} onMove={(moved) => setViewport(moved.viewState)} >
            {searchResults.map((result, index) => (
                <div key={index} >
                    <Marker onClick={() => handleClick(result, index)} longitude={result.long} latitude={result.lat} className="text-red-400" >
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
            <NavigationControl/>
            <GeolocateControl/>
            <FullscreenControl/>
            <ScaleControl/>
        </Map>
    )
}

export default Maps;