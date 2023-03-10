import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function GoogleMaps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDM3NoqLeUACXM00S9KkhY8NI5wiSbJmVY",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container" >
      <Marker position={center} />
    </GoogleMap>
  );
}