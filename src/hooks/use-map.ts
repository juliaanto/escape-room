import { useEffect, useState } from 'react';

import { ContactAddress } from 'types/map';
import leaflet from 'leaflet';

function useMap(mapRef: React.MutableRefObject<null>, address: ContactAddress) {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: address.lat,
          lng: address.lng,
        },
        zoom: address.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);
        setMap(instance);
      }
    }, [mapRef, map, address]);

  return map;
}

export default useMap;
