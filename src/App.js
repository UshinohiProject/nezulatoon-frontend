import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/molecules/ScrollToTop'
import Top from './components/molecules/Top'
import YaegakiShaonkai from './components/molecules/YaegakiShaonkai'
import NezuGinza from './components/molecules/NezuGinza'
import NezuMiyanaga from './components/molecules/NezuMiyanaga'
import TopDemo from './components/molecules/TopDemo'
import YaegakiShaonkaiDemo from './components/molecules/YaegakiShaonkaiDemo'
import NezuGinzaDemo from './components/molecules/NezuGinzaDemo'
import NezuMiyanagaDemo from './components/molecules/NezuMiyanagaDemo'
import Nezlershot from './components/molecules/Nezlershot'
import NezBlaster from './components/molecules/NezBlaster'
import YaegakiShaonkaiDemoNezBlaster from './components/molecules/YaegakiShaonkaiDemoNezBlaster'
import YaegakiShaonkaiDemoPainted from './components/molecules/YaegakiShaonkaiDemoPainted'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={`/`} element={<Top />} />
        <Route path='/TopDemo' element={<TopDemo />}/>
        <Route path='/YaegakiShaonkai' element={<YaegakiShaonkai />}/>
        <Route path='/NezuGinza' element={<NezuGinza />}/>
        <Route path='/NezuMiyanaga' element={<NezuMiyanaga />}/>
        <Route path='/YaegakiShaonkaiDemo' element={<YaegakiShaonkaiDemo />}/>
        <Route path='/NezuGinzaDemo' element={<NezuGinzaDemo />}/>
        <Route path='/NezuMiyanagaDemo' element={<NezuMiyanagaDemo />}/>
        <Route path='/Nezlershot' element={<Nezlershot />}/>
        <Route path='/NezBlaster' element={<NezBlaster />}/>
        <Route path='/YaegakiShaonkaiDemoNezBlaster' element={<YaegakiShaonkaiDemoNezBlaster />}/>
        <Route path='/YaegakiShaonkaiDemoPainted' element={<YaegakiShaonkaiDemoPainted />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
