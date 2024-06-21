import React from 'react';
import { APIProvider, Map, Marker, AdvancedMarker, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';

const GoogleMap = ({ center, zoom, mapId }) => {
    const [markerRef, marker] = useAdvancedMarkerRef();

    return (
        <APIProvider apiKey="secret">
            <Map
                style={{ width: '100%', height: '100%', marginBottom: '32px'}}
                center={center}

                zoom={zoom}
                mapId={mapId}
                mapTypeId="satellite"
                lazy={true}
                reuseMaps={true}

            >
                <AdvancedMarker ref={markerRef} className='z-[99] bg-red-400 h-40 w-40 font-sans font-black text-2xl text-black' id={Map.mapId} position={center}  title="Intracoastal Dermatology Office Location" />
            </Map>
        </APIProvider>
    );
};

export default GoogleMap;
