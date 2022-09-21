import React, { useEffect, useState, useRef } from "react";

const Map = ({ children }) => {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return (
    <div className="map" ref={ref}>
      {children}
    </div>
  );
};

export default Map;
