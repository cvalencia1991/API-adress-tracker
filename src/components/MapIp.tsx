import { useRef } from "react";
import L, { LatLngExpression } from "leaflet";
import { Marker, Popup, MapContainer, TileLayer } from "react-leaflet";
import { useAppSelector } from "../hooks";
import { selectIpAddress } from "../features/reducers/ipReducer";
import "leaflet/dist/leaflet.css";

const MapIp = () => {
  const ipAddress = useAppSelector(selectIpAddress);
  const mapRef = useRef(null);

  if (ipAddress.loading) {
    return (
      <div className="flex justify-center align-center content-center h-screen">
        <div className="loader relative top-1/2"></div>
      </div>
    );
  }

  const position: LatLngExpression = [
    ipAddress.location?.lat ?? 0,
    ipAddress?.location?.lng ?? 0,
  ];

  const customIcon = L.icon({
    iconUrl: "../../src/img/icon-location.svg",
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      ref={mapRef}
      style={{ height: "100vh", width: "100vw", zIndex: "-1" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 
                  contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapIp;
