import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, Intro, SignIn, Signup, Category, Splash, MyPage } from "pages";
import Walk from "pages/Walk/Walk";
import WalkDetail from "pages/WalkDetail/WalkDetail";

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
        <Route path="/walk/:id" element={<WalkDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        {/* <Route path="/EditPage" element={<EditPage />} /> */}
      </Routes>
    </>
  );
};

export default Router;
