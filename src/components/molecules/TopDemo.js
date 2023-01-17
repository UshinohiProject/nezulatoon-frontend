import React from 'react';
// import { useGeolocated } from "react-geolocated";
import { Link } from "react-router-dom";
import './TopDemo.css';
// import ApiFetch from './ApiFetch';
// import Map from './Map';
import NezulatoonLogo from './img/logo/nezulatoon_logo.png'

function TopDemo() {

  return (
    <div className="App">
      <div className="bg-nezukatoon-black">
        <div className="opening-logo">
          <img src={NezulatoonLogo} alt='the logo of nezulatoon' className='opening-logo-nezulatoon' />
        </div>
        <div className='start-buttons'>
          <div className='start-button'>
            <Link className="btn btn--orange btn--radius" to={`/SelectTeamDemo/`}>スタート</Link>
          </div>
          <div className='registration-button'>
            <Link className="btn btn--gray btn--radius" to={`/TopDemo/`}>新規登録</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopDemo;
