import React, { Fragment, useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  Pin,
} from "@vis.gl/react-google-maps";
import { GiSkullCrossedBones } from "react-icons/gi";
import { TailSpin } from "react-loading-icons";

const API_KEY = import.meta.env.VITE_GAPI_KEY;

export function MapCanvas(props) {
  const [isLoading, setIsLoading] = useState();
  const args = {
    mapId: "fof-tattoo-olympia",
    center: { lat: 47.0467042, lng: -122.8799348 },
    htmlStyles: { height: "60vh", width: "100vw" },
    zoom: 15,
    infoPosition: { lat: 47.048, lng: -122.8799348 },
    bgColor: "black",
    glyphBorder: "#333",
    glyphColor: "firebrick",
  };

  const handleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <Fragment>
      {useEffect(() => console.dir(window.google.maps))}
      <APIProvider apiKey={API_KEY}>
        <Map
          mapId={args.mapId}
          defaultCenter={args.center}
          defaultZoom={args.zoom}
          style={args.htmlStyles}
          title={props.content.title}
        >
          <AdvancedMarker
            mapId={args.mapId}
            position={args.center}
            title={props.content.title}
          >
            <Pin
              background={args.bgColor}
              borderColor={args.glyphBorder}
              glyphColor={args.glyphColor}
            >
              <GiSkullCrossedBones size="4em" />
            </Pin>
          </AdvancedMarker>
          <InfoWindow position={args.infoPosition} maxWidth={200}>
            <p>{props.content.title}</p>
            <p>{props.content.addressOne}</p>
            <p>{props.content.addressTwo}</p>
            <p>{props.content.telNum}</p>
          </InfoWindow>
        </Map>
      </APIProvider>
    </Fragment>
  );
}
