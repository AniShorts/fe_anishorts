// import React, { useState } from "react";
// import previewImg from "../img/img_blue.jpg";
// import "../scss/EditPage.css";

// const EditPage = () => {
//   const [profileImage, setProfileImage] = useState<any>(previewImg);

//   return (
//     <>
//       <div className="profile">
//         <img
//           className="pre-img"
//           src={profileImage ? profileImage : previewImg}
//           alt="img"
//         ></img>
//       </div>
//       <div className="edit-container">
//         <input></input>
//         <input></input>
//         <input></input>
//         <input></input>
//       </div>
//     </>
//   );
// };

// export default EditPage;

import React from "react";
import { useRecoilState } from "recoil";
import { nicknameState, passwordState } from "../../recoil/atom";

const EditPage: React.FC = () => {
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [password, setPassword] = useRecoilState(passwordState);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform any validation or submission logic here
    console.log("Updated status values:", { nickname, password });
  };

  return (
    <div>
      <h1>정보 변경</h1>
      <form onSubmit={handleSubmit}>
        <label>
          닉네임:
          <input type="text" value={nickname} onChange={handleNicknameChange} />
        </label>
        <br />
        <label>
          비밀번호:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit"> 변경하기 </button>
      </form>
    </div>
  );
};

export default EditPage;
