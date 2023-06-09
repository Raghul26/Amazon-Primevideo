import React from 'react'
import TopContainer from "./Components/TopContainer/TopContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieLogin from "./Components/MovieLogin/MovieLogin";


const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route exacts path='/' element={<TopContainer />} />
            <Route exacts path='/login' element={<MovieLogin />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
