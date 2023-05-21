import React from 'react'
import { Header } from 'component/Login'
import { useForm } from 'react-hook-form'
import className from "classnames/bind";
import styles from "../../pages/Login/SignIn.module.scss"
import { loginApi } from 'apis'

const SignIn: React.FC = () => {
    const cx = className.bind(styles);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({});

    const nicknameOpt = {
        required: "닉네임은 필수 입력입니다",
        maxLength: { value: 8, message: "8자 이하로 정해주세요" },
    };

    const pwOpt = {
        required: "비밀번호는 필수 입력입니다",
        minLength: { value: 8, message: "8자리 이상 비밀번호를 사용하세요." },
        maxLength: { value: 16, message: "16자리 이하 비밀번호를 사용하세요." },
        pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/, message: "특수문자와 숫자를 포함해주세요" },
    };

    console.log(watch("nickname"));

    return (
        <>
            <Header title="로그인" />
            <form onSubmit={handleSubmit((data) => { loginApi.login(data) })}>
                <p className={cx('title')}>아이디</p>
                <div className={cx('sort')}>
                    <input placeholder='아이디를 입력해주세요'
                        className={cx('customInput')} {...register("nickname", nicknameOpt)} />
                </div>
                {errors.nickname?.message && <p className={cx('caution')}>아이디 형식이 맞지않습니다</p>}

                <p className={cx('title')}>비밀번호</p>
                <div className={cx('sort')}>
                    <input placeholder='아이디를 입력해주세요' type='password'
                        className={cx('customInput')} {...register("password", pwOpt)} />
                </div>
                {errors.password?.message && <p className={cx('caution')}>비밀번호 형식이 맞지않습니다</p>}
                <div className={cx('sort')}>
                    <button className={cx('btn')}>로그인</button>
                </div>
            </form>
        </>
    )
}

export default SignIn