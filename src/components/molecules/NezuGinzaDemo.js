import React from 'react';
// import { useGeolocated } from "react-geolocated";
import { Link } from "react-router-dom";
import './NezuGinza.css';
// import ApiFetch from './ApiFetch';
// import Map from './img/map/NezuGinza.png'
// import Map from './Map';

function NezuGinza() {
    var streatName = "根津銀座通り商睦会";
    var weaponName = "FuntasticGun";

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
                    <img className="map" src={"http://drive.google.com/uc?export=view&id=1GJiTFDKeNOq3E0nih12S2eMtTAcK4UqC"} alt="map"></img>
                    {/* <img src={Map} alt="map"></img> */}
                    <p>{weaponName}</p>
                    <p>{streatName}</p>
                    <Link className="home-link" to={`/TopDemo`}>商店街を再選択 &#8250;</Link>


                </div>
        <a href="/NezuGinzaDemo" className="btn btn--blue">Shoot</a>
      </header>
    </div>
  );
}

export default NezuGinza;
