import React from 'react';
import './Top.css';
import ApiFetch from './ApiFetch';
import Map from './Map';

function Top() {
  return (
    <div className="App">
      <header className="App-header">
        <Map />
        <ApiFetch />
        <a href="/" className="btn btn--orange">Shoot</a>
      </header>
    </div>
  );
}

export default Top;
