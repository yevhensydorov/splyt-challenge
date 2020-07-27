import GoogleMapReact from "google-map-react";

import TaxiMarker from "./TaxiMarker";

import { GOOGLE_MAPS_API_KEY } from "../constants/constants";

import { Driver, InitialCenter } from "../types/Types";

type MapProps = {
  driversList: Driver[];
  center: InitialCenter;
  zoom: number;
};

const Map = (props: MapProps) => {
  const { driversList, center, zoom } = props;

  const renderTaxiMarkers = () => {
    const driversMarkers = driversList.map((driver: Driver) => {
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
        defaultCenter={center}
        defaultZoom={zoom}
        distanceToMouse={() => {}}
        fullscreenControl={false}
      >
        {renderTaxiMarkers()}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
