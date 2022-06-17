import React from 'react';
import { useGeolocated } from "react-geolocated";
import './NezuGinza.css';
import ApiFetch from './ApiFetch';
// import Map from './Map';

function NezuGinza() {
    var streatName = "根津銀座通り商睦会";
    var weaponName = "FuntasticGun";

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
        {/* <Map isGeolocationAvailable={isGeolocationAvailable} isGeolocationEnabled={isGeolocationEnabled} coords={coords} /> */}
        <ApiFetch isGeolocationAvailable={isGeolocationAvailable} isGeolocationEnabled={isGeolocationEnabled} coords={coords} streatName={streatName} weaponName={weaponName}/>
        <a href="/NezuGinza" className="btn btn--blue">Shoot</a>
      </header>
    </div>
  );
}

export default NezuGinza;
