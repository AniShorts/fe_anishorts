import React, { useState, useEffect, useRef } from "react";
import styles from "./MyPage.module.scss";
import className from "classnames/bind";
import UserInformation from "component/My/UserInformation";
import Tab from "component/My/Tab";

const cx = className.bind(styles);

const MyPage: React.FC = () => {
  const [profileImage, setProfileImage] = useState<any>(null);
  const [preview, setPreview] = useState<any>("");
  const [clickTab, setClickTab] = useState(0);

  //tab 배열
  const menuArr = [
    { name: '게시물'},
    { name: '좋아요'},
    { name: '저장'},
  ];

  // tab 바꾸는 함수
  const selectMenuHandler = (index: number) => {
    setClickTab(index);
  };

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
      <div className={cx("img-box")}>
        <img
          className={cx("pre-img")}
          src={profileImage ? profileImage : "images/icon/profile.png"}
          alt="img"
        />
        <label className={cx("img-icon")} htmlFor="file" onClick={handleClick}>
          <img
            src={"/images/icon/check.png"}
            alt="사진 추가 아이콘"
          />
        </label>
        <h3>{"!닉네임"}</h3>
        {/* hidden input */}
        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          onChange={onChangeImg}
          hidden
        />
      </div>
      <div className={cx("info-box")}>
        {/* 1번안 */}
        <UserInformation info="팔로잉" number={11} />
        <UserInformation info="팔로워" number={111} />
        <UserInformation info="게시물" number={111} />
        {/* 2번안 
            이유: 추후에 유저 인포를 클릭시 모달창이 나와야해서 
          <div className={cx("userInformation")}>
          <p>11</p>
          <p>게시물</p>
        </div> */}
      </div>
      <div className={cx("profile-box")}>
        <button type="button">프로필 편집</button>
      </div>
      <ul className={cx('tab')}>
        {menuArr.map((el:{name:string}, index: number) => (
          <li
            className={cx(index === clickTab ? 'focused' : 'submenu')}
            onClick={() => selectMenuHandler(index)}
          >
            {el.name}
          </li>
        ))}
      </ul>
      <Tab clickTab={clickTab} info={"정보들"}/>
    </>
  );
};

export default MyPage;
