import React from "react";
import { Btn } from "component/Login";
import { useForm } from "react-hook-form";
import className from "classnames/bind";
import styles from "../../pages/Login/SignIn.module.scss";
import { loginApi } from "apis/loginApi";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignIn: React.FC = () => {
  const cx = className.bind(styles);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    nickname: yup
      .string()
      .min(2, "닉네임은 최소 2글자 이상입니다!")
      .max(10, "닉네임은 최대 10글자입니다!")
      .matches(
        /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
        "닉네임에 특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다!"
      )
      .required("닉네임을 입력해주세요"),
    pw: yup
      .string()
      .max(16, "비밀번호는 최대 16자리입니다!")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}[^\s]*$/,
        "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함한 8자리 이상 입력해주세요"
      )
      .required("비밀번호를 입력해주세요"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onBlur" });

  //로그인 api
  const WaitLogin = async (data: any) => {
    // const answer = await loginApi(data);
    // console.log(answer);
    // 토큰관리는 쿠키로 할것
    // if (answer) {
    //     navigate(`/main`);
    // }
  };

  return (
    <>
      <form
        className={cx("container")}
        onSubmit={handleSubmit((data) => WaitLogin(data))}
      >
        <div className={cx("backImg")} />
        <div className={cx("formWrap")}>
          <div className={cx("idWrap")}>
            <span>
              <span className={cx("boldText")}>아이디</span>를
              <span className={cx("boldText")}>입력</span>하세요.
            </span>
            <input {...register("nickname")} />
            {/* {errors.nickname?.message &&<span className={cx('test')} />} */}
          </div>
          <span>
            <span className={cx("boldText")}>비밀번호</span>를{" "}
            <span className={cx("boldText")}>입력</span>하세요.
          </span>
          <input type="password" {...register("pw")} />
          {/* {!errors.password?.message && <span className={cx('test')} />} */}
          {errors.nickname?.message}
          {errors.pw?.message}
        </div>
        {/* {errors.nickname?.message && <span className={cx('errorText')}>{errors?.email?.toString()}</span> || errors.password?.message && <span className={cx('errorText')}>{errors?.password?.toString()}</span>} */}
        <div className={cx("wrap")}>
          <Btn title="로그인" nav="null" move={false} />
          <Btn title="카카오톡으로 빠른 로그인" nav="kakao" move={true} />
        </div>
        <div className={cx("findBox")}>
          <span
            onClick={() => {
              navigate(`/signup`);
            }}
          >
            아이디 찾기
          </span>
          <span>|</span>
          <span
            onClick={() => {
              navigate(`/signin`);
            }}
          >
            비밀번호 변경
          </span>
        </div>
      </form>
    </>
  );
};

export default SignIn;
