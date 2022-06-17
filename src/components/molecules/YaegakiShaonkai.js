import React from 'react';
import { useGeolocated } from "react-geolocated";
import './YaegakiShaonkai.css';
import ApiFetch from './ApiFetch';
// import Map from './Map';

function YaegakiShaonkai() {
    var streatName = "八重垣謝恩会";
    var weaponName = "SpecialGun";

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
        <a href="/YaegakiShaonkai" className="btn btn--red">Shoot</a>
      </header>
    </div>
  );
}

export default YaegakiShaonkai;
