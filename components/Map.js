import GoogleMapReact from "google-map-react";

import TaxiMarker from "./TaxiMarker";

import { SPLYT_COORDINATES, GOOGLE_MAPS_API_KEY } from "../constants/constants";

const mapDefaultProps = {
  center: {
    lat: SPLYT_COORDINATES.lat,
    lng: SPLYT_COORDINATES.long,
  },
  zoom: 14,
};

const Map = ({ driversList }) => {
  const renderTaxiMarkers = () => {
    const driversMarkers = driversList.map((driver) => {
      const { latitude, longitude } = driver.location;

      return (
        <TaxiMarker
          key={driver.driver_id}
          lat={latitude}
          lng={longitude}
          markerText={driver.driver_id}
        />
      );
    });

    return driversMarkers;
  };

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={mapDefaultProps.center}
        defaultZoom={mapDefaultProps.zoom}
        distanceToMouse={() => {}}
        fullscreenControl={false}
      >
        {renderTaxiMarkers()}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
