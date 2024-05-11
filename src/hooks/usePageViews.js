import React, { useEffect, useState } from "react";

const usePageViews = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  let location = useLocation();

  useEffect(() => {
    setCurrentLocation(location);
  }, [location]);

  return currentLocation;
};

export default usePageViews;
