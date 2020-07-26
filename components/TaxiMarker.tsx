import MapPin from "../assets/MapMarker.svg";

const TaxiMarker = ({ markerText }) => {
  return (
    <div
      style={{
        width: "25px",
        height: "25px",
      }}
      title={`Driver id: ${markerText}`}
    >
      <MapPin />
    </div>
  );
};

export default TaxiMarker;
