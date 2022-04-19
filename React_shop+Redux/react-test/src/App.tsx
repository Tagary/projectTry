import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Galery from './pages/Galery';
import AboutMe from './pages/AboutMe';
import ImageDetails from './pages/ImageDetails';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Galery />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/ImgDetail" element={<ImageDetails />} />
      </Routes>
    </div>
  );
}

export default App;
