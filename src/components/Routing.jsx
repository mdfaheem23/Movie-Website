import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App'
import MovieSection from './MovieSection';
const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/Movies" element={<MovieSection/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing