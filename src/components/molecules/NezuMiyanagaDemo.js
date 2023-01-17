import React from 'react';
// import { useGeolocated } from "react-geolocated";
import { Link } from "react-router-dom";
import './NezuMiyanaga.css';
// import ApiFetch from './ApiFetch';
// import Map from './Map';

function NezuMiyanaga() {
    var streatName = "根津宮永商盛会";
    var weaponName = "TraditionalGun";

//   const { coords, isGeolocationAvailable, isGeolocationEnabled } =
//   useGeolocated({
//       positionOptions: {
//           enableHighAccuracy: false,
//       },
//       userDecisionTimeout: 5000,
//   });

  return (
    <div className="App">
      <header className="App-header">
        {/* <Map isGeolocationAvailable={isGeolocationAvailable} isGeolocationEnabled={isGeolocationEnabled} coords={coords} /> */}
        {/* <ApiFetch isGeolocationAvailable={isGeolocationAvailable} isGeolocationEnabled={isGeolocationEnabled} coords={coords} streatName={streatName} weaponName={weaponName}/> */}
        <div>
                    <img className="map" src={"http://drive.google.com/uc?export=view&id=1kLBGYlCdA1P4g9ixGBAvKfXE0pjhnb-h"} alt="map"></img>
                    {/* <img src={Map} alt="map"></img> */}
                    <p>{weaponName}</p>
                    <p>{streatName}</p>
                    <Link className="home-link" to={`/SelectTeamDemo`}>商店街を再選択 &#8250;</Link>


                </div>
        <a href="/NezuMiyanagaDemoPainted" className="btn btn--green">Shoot</a>
      </header>
    </div>
  );
}

export default NezuMiyanaga;
