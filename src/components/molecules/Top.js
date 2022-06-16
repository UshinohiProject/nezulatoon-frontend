import React from 'react';
import { useGeolocated } from "react-geolocated";
import './Top.css';
import ApiFetch from './ApiFetch';
import Map from './Map';

function Top() {

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  });

  return (
    <div className="App">
      <header className="App-header">
        <Map isGeolocationAvailable={isGeolocationAvailable} isGeolocationEnabled={isGeolocationEnabled} coords={coords} />
        <ApiFetch isGeolocationAvailable={isGeolocationAvailable} isGeolocationEnabled={isGeolocationEnabled} coords={coords} />
        <a href="/" className="btn btn--orange">Shoot</a>
      </header>
    </div>
  );
}

export default Top;
