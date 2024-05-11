import React, { Fragment } from "react";
import { MapCanvas } from "../pageComponents/MapCanvas";

const Directions = (props) => {
  return (
    <Fragment>
      {/* <div id="map"> */}
      <MapCanvas id="map" />
      {/* </div> */}
    </Fragment>
  );
};

// if can't get working, try:
// @opencounter/react-google-maps@9.4.7
export default Directions;
