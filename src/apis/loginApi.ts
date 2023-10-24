import instance from "apis";

//로그인
export const loginApi = async (loginData : any) => {
   const answer = { result: true };
    try {
      const res = await instance.post(process.env.REACT_APP_SERVER + 'users/login', loginData);
      localStorage.setItem("accessToken", res.data.access);
      console.log(res.data.access);
    } catch (err) {
      console.log(err);
      answer.result = false;
    }
    return answer
};

//회원가입
export const signupApi = async (category: any, user : any) => {

  try {
    console.log(category);
    const res = await instance.post(process.env.REACT_APP_SERVER + 'users/signup', category);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

//닉네임 중복 확인
export const dupcheckApi = async (nickname : any) => {
    try {
      const res = await instance.post(process.env.REACT_APP_SERVER + 'users/checkNickname', nickname);
      alert('성공')
      console.log(res);
    } catch (err) {
      console.log(err);
    }
};

//카테고리 Get 요청
export const getCategoryApi = async () => {
  try {
    const res = await instance.get(process.env.REACT_APP_SERVER + 'categorylist')
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}