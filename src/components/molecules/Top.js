import React from 'react';
import './Top.css';
import ApiFetch from './ApiFetch';

function Top() {
  return (
    <div className="App">
      <header className="App-header">
        <ApiFetch />
        <a href="/" className="btn btn--orange">Shoot</a>
      </header>
    </div>
  );
}

export default Top;
