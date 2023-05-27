import axios from "axios";

//로그인
export const login = async (loginData : any) => {
    try {
      const res = await axios.post(process.env.REACT_APP_SERVER + 'users/login', loginData);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
};

//회원가입
export const signup = async (userData : any) => {
  try {
    const res = await axios.post(process.env.REACT_APP_SERVER + 'users/signup', userData);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

//닉네임 중복 확인
export const dupcheck = async (nickname : any) => {
    try {
      const res = await axios.post(process.env.REACT_APP_SERVER + 'users/checkNickname', nickname);
      alert('성공')
      console.log(res);
    } catch (err) {
      console.log(err);
    }
};

//카테고리 Get 요청
export const getCategory = async () => {
  try {
    const res = await axios.get(process.env.REACT_APP_SERVER + 'categorylist')
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}