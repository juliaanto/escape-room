import 'leaflet/dist/leaflet.css';

import * as S from './map.styled';

import { useEffect, useRef } from "react";

import { ContactAddress } from "types/map";
import leaflet from 'leaflet';
import useMap from "hooks/use-map";

type MapProps = {
  address: ContactAddress;
}

function Map(props: MapProps): JSX.Element {
  const {address} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, address);

  const defaultIcon = leaflet.icon({
    iconUrl: '../icons/marker-icon.png',
    iconSize: [48, 62],
    iconAnchor: [24, 62],
  });

  useEffect(() => {
    if (map) {
      leaflet.marker({
        lat: address.lat,
        lng: address.lng,
      }, {
        icon: defaultIcon,
      })
      .addTo(map);
    }
  }, [address.lat, address.lng, defaultIcon, map]);

  return (
    <S.ContactsMap
      ref={mapRef}
    />
  );
}

export default Map;
