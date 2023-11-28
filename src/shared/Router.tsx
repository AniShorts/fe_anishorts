import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, Intro, SignIn, Signup, Category, Splash } from "pages";
import Walk from "pages/Walk/Walk";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Main />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Splash" element={<Splash />} />
        <Route path="/walk" element={<Walk />} />
        {/* <Route path="/EditPage" element={<EditPage />} /> */}
      </Routes>
    </>
  );
};

export default Router;
