import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, Intro, SignIn, Signup, Category } from "pages";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Category" element={<Category />} />
        {/* <Route path="/EditPage" element={<EditPage />} /> */}
      </Routes>
    </>
  );
};

export default Router;
