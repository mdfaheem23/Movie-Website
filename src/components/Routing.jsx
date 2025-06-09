import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieWrapper from './MovieWrapper'
import App from '../App'
import NavBar from './NavBar'
import MovieSection from './MovieSection';
const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/Movies" element={<div><MovieSection/></div>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing