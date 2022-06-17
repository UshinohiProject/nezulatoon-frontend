import React from 'react';
// import { useGeolocated } from "react-geolocated";
import { Link } from "react-router-dom";
import './Top.css';
// import ApiFetch from './ApiFetch';
// import Map from './Map';

function Top() {

  // const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  // useGeolocated({
  //     positionOptions: {
  //         enableHighAccuracy: false,
  //     },
  //     userDecisionTimeout: 5000,
  // });

  return (
    <div className="App">
      <header className="App-header">
        {/* <Map isGeolocationAvailable={isGeolocationAvailable} isGeolocationEnabled={isGeolocationEnabled} coords={coords} /> */}
        {/* <ApiFetch isGeolocationAvailable={isGeolocationAvailable} isGeolocationEnabled={isGeolocationEnabled} coords={coords} />
        <a href="/" className="btn btn--orange">Shoot</a> */}
        <h2>Select Your Team</h2>
        <Link className="team-name" to={`/YaegakiShaonkai/`}>八重垣謝恩会 &#8250;</Link>
        <Link className="team-name" to={`/NezuGinza/`}>根津銀座通り商睦会 &#8250;</Link>
        <Link className="team-name" to={`/NezuMiyanaga/`}>根津宮永商盛会 &#8250;</Link>
      </header>
    </div>
  );
}

export default Top;
