import React from 'react'
import { Btn, Header } from 'component/Login'
import { useForm } from 'react-hook-form'
import className from "classnames/bind";
import styles from "../../pages/Login/SignIn.module.scss"
import { loginApi } from 'apis/loginApi';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
    const cx = className.bind(styles);
    const navigate = useNavigate();
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

    //로그인 api
    const WaitLogin = async (data: any) => {
        // const answer = await loginApi(data);
        // console.log(answer);
        // if (answer) {
        //     navigate(`/main`);
        // }
    }
    return (
        <>
            <form className={cx("container")} onSubmit={handleSubmit((data) => WaitLogin(data))}>
                <div className={cx("backImg")} />
                <div className={cx("formWrap")}>
                    <div className={cx("idWrap")}>
                        <span>
                            <span className={cx("boldText")}>아이디</span>를
                            <span className={cx("boldText")}>입력</span>하세요.
                        </span>
                        <input
                            {...register("nickname", nicknameOpt)}
                        />
                        {!errors.nickname?.message &&<span className={cx('test')} />}
                    </div>
                    <span><span className={cx("boldText")}>비밀번호</span>를 <span className={cx("boldText")}>입력</span>하세요.</span>
                    <input
                        type='password'
                        {...register("password", pwOpt)}
                    />
                     {!errors.password?.message && <span className={cx('test')} />}
                </div>
                {errors.nickname?.message && <span className={cx('errorText')}>{errors?.email?.toString()}</span> || errors.password?.message && <span className={cx('errorText')}>비밀번호 형식이 맞지않습니다</span>}
                <div className={cx("wrap")}>
                    <Btn title='로그인' nav='asd' />
                    <Btn title='카카오톡으로 빠른 로그인' nav='asd'/>
                </div>
                <div className={cx('findBox')}>
                    <span onClick={() => { navigate(`/signup`) }}>아이디 찾기</span>
                    <span>|</span>
                    <span onClick={() => { navigate(`/signin`) }}>비밀번호 변경</span>
                </div>
            </form>



            {/*  <form className={cx("container")} onSubmit={handleSubmit((data) => WaitLogin(data))}>
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

            </form>*/}
        </>
    )
}

export default SignIn