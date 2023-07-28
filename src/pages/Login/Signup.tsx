import React from 'react'
import className from "classnames/bind";
import styles from "../../pages/Login/SignIn.module.scss"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil';
import { userData } from 'recoil/atom';
import { Header } from 'component/Login'
import { dupcheckApi } from 'apis/loginApi';

const Signup: React.FC = () => {
  type FormInputs = {
    nickname: string;
    password: string;
    pwConfirm: string;
    email: string;
    emailConfirm: string;
  };
  const accessToken = localStorage.getItem("accessToken");

  const { register, getValues, handleSubmit, setError, formState: { errors } } = useForm<FormInputs>();
  const navigate = useNavigate();
  const cx = className.bind(styles);
  const [user, setUser] = useRecoilState(userData);

  const nicknameOpt = {
    required: "닉네임은 필수 입력입니다",
    maxLength: { value: 8, message: "8자 이하로 정해주세요" },
  };
  const emailOpt = {
    required: "이메일은 필수 입력입니다",
    maxLength: { value: 30, message: "30자 이하로 정해주세요" },
    pattern: {
      value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
      message: "이메일이 형식에 맞지 않습니다.",
    },
  };
  const pwOpt = {
    required: "비밀번호는 필수 입력입니다",
    minLength: { value: 8, message: "8자리 이상 비밀번호를 사용하세요." },
    maxLength: { value: 16, message: "16자리 이하 비밀번호를 사용하세요." },
    pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/, message: "특수문자와 숫자를 포함해주세요" },
  };
  const confirmOpt = {
    ...pwOpt,
    required: "비밀번호 재확인을 해주세요",
  };
  const emailConfirm = {
    required: "인증번호를 입력해주세요",
    maxLength: { value: 4, message: "4자 이하로 정해주세요" },
  };

  // 유효성 체크 함수
  const onCheck = (e: any, type: any) => {
    e.preventDefault();
    const data = getValues(type);
    if (data === "") {
      setError(type, { message: "다시 확인해주세요" }, { shouldFocus: true });
      console.log(type);
    } else {
      dupcheckApi(data);
    }
  };


  return (
    <>
      <Header title="회원가입" />
      <p className={cx('title')}>아이디</p>
      <div className={cx('array')}>
        <input style={{}} placeholder='아이디를 입력해주세요'
          className={cx('dupInput')} {...register("nickname", nicknameOpt)} />
        <button onClick={(e) => onCheck(e, "nickname")} className={cx('dupBtn')}>중복 확인</button>
      </div>
        <p className={cx('caution')}>{errors.nickname?.message}</p>

      <p className={cx('title')}>비밀번호</p>
      <div className={cx('sort')}>
        <input placeholder='비밀번호를 입력해주세요' type='password'
          className={cx('customInput')} {...register("password", pwOpt)} />
      </div>
        <p className={cx('caution')}>{errors.password?.message}</p>

      <p className={cx('title')}>비밀번호 확인</p>
      <div className={cx('sort')}>
        <input placeholder='비밀번호를 확인해주세요' type='password'
          className={cx('customInput')} {...register("pwConfirm", confirmOpt)} />
      </div>
        <p className={cx('caution')}>{errors.pwConfirm?.message}</p>

      <p className={cx('title')}>이메일 인증</p>
      <div className={cx('sort')}>
        <input placeholder='이메일을 입력해주세요'
          className={cx('customInput')} {...register("email", emailOpt)} />
      </div>
        <p className={cx('caution')}>{errors.email?.message}</p>

      <p className={cx('title')}>인증번호</p>
      <div className={cx('sort')}>
        <input placeholder='인증번호를 입력해주세요'
          className={cx('customInput')} maxLength={4} {...register("emailConfirm", emailConfirm)} />
      </div>
       <p className={cx('caution')}>{errors.emailConfirm?.message}</p>

      <div className={cx('sort')}>
        <button onClick={handleSubmit((data) => { setUser(data); navigate('/Category') })} className={cx('btn')}>다음</button>
      </div>
    </>
  )
}

export default Signup