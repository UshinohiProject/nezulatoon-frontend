import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/molecules/ScrollToTop'
import Top from './components/molecules/Top'
import YaegakiShaonkai from './components/molecules/YaegakiShaonkai'
import NezuGinza from './components/molecules/NezuGinza'
import NezuMiyanaga from './components/molecules/NezuMiyanaga'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={`/`} element={<Top />} />
        <Route path='/YaegakiShaonkai' element={<YaegakiShaonkai />}/>
        <Route path='/NezuGinza' element={<NezuGinza />}/>
        <Route path='/NezuMiyanaga' element={<NezuMiyanaga />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
