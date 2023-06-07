import React from "react";
import { useState, useEffect, useRef } from "react";
import previewImg from "../img/img_blue.jpg";
// import "../scss/EditPage.css";

const EditPage: React.FC = () => {
  const [profileImage, setProfileImage] = useState<any>(previewImg);

  return (
    <>
      <div className="profile">
        <img
          className="pre-img"
          src={profileImage ? profileImage : previewImg}
          alt="img"
        ></img>
      </div>
      <div className="edit-container">
        <input></input>
        <input></input>
        <input></input>
        <input></input>
      </div>
    </>
  );
};

export default EditPage;
