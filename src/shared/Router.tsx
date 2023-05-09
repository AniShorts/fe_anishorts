import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Main, Intro } from 'pages';

const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Main" element={<Main />} />
    </Routes>
    </>
  )
}

export default Router