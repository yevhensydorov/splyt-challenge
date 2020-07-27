import MapPin from "../assets/MapMarker.svg";

const TaxiMarker = (props: any) => {
  const { markerText } = props;

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
