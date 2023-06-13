import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import styles from "./MyPage.module.scss";
import previewImg from "../img/img_blue.jpg";
import className from "classnames/bind";

const cx = className.bind(styles);

const MyPage: React.FC = () => {
  const [profileImage, setProfileImage] = useState<any>(previewImg);
  const [preview, setPreview] = useState<any>("");

  const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      let image = window.URL.createObjectURL(file);
      setProfileImage(image);
      setPreview(file);
    }
    // FileReader 방법
    // if (e.target.files !== null) {
    //   const file = e.target.files[0];
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onload = () => {
    //     setProfileImage(reader.result);
    //   };
    // if (file && file.type.substring(0, 5) === "image") {
    //   setProfileImage(file);
    // } else {
    //   setProfileImage(null);
    // }
    //}
  };

  //URL.createObjectURL 방법
  // const [images, setImages] = useState<string[]>([]);
  //   const handleChange = (e: React.ChangeEvent) => {
  //     const targetFiles = (e.target as HTMLInputElement).files as FileList;
  //     const targetFilesArray = Array.from(targetFiles);
  //     const selectedFiles: string[] = targetFilesArray.map((file) => {
  //       return URL.createObjectURL(file);
  //       setImages((prev) => prev.concat(selectedFiles));
  //     });
  //   }

  // useEffect(() => {
  //   if (profileImage) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreview(reader.result as string);
  //     };
  //     reader.readAsDataURL(profileImage);
  //   } else {
  //     setPreview(null);
  //   }
  // }, [profileImage]);

  const fileRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    fileRef?.current?.click();
  };

  return (
    <>
      <div className={cx("profile-container")}>
        <div className="img-container">
          <img
            className="pre-img"
            src={profileImage ? profileImage : previewImg}
            alt="img"
          />
        </div>
        <div className="userInformation">
          <p className="nickname">김땡땡</p>
          <p className="follower">999명</p>
        </div>
        <div>
          {/* hidden input */}
          <input
            className="input"
            type="file"
            accept="image/*"
            ref={fileRef}
            onChange={onChangeImg}
          />
        </div>
        <label htmlFor="file" className="labelButton" onClick={handleClick}>
          ---
        </label>
      </div>
      <div className="main-container">
        <div className="video-container">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            controls={true}
          />
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=l_iXA_KZSEk"
            controls={true}
          />
          <ReactPlayer
            className="react-player"
            s
            url="https://www.youtube.com/watch?v=-8Jbpenn3o4"
            controls={true}
          />
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=-8Jbpenn3o4"
            controls={true}
          />
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=-8Jbpenn3o4"
            controls={true}
          />
        </div>
      </div>
    </>
  );
};

export default MyPage;
