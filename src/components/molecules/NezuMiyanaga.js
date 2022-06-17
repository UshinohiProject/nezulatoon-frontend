import React from 'react';
import { useGeolocated } from "react-geolocated";
import './NezuMiyanaga.css';
import ApiFetch from './ApiFetch';
// import Map from './Map';

function NezuMiyanaga() {
    var streatName = "根津宮永商盛会";
    var weaponName = "TraditionalGun";

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
        <a href="/NezuMiyanaga" className="btn btn--green">Shoot</a>
      </header>
    </div>
  );
}

export default NezuMiyanaga;
