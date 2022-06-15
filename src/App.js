import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/molecules/ScrollToTop'
import Top from './components/molecules/Top'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={`/`} element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
