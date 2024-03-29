import React, { useState } from 'react';
import className from "classnames/bind";
import styles from "./Intro.module.scss"
import ReactPlayer from "react-player";
import { useNavigate } from 'react-router-dom'
import { KakaoBt, Dash, Btn } from 'component/Login';

const Intro : React.FC = () => {
  const cx = className.bind(styles);
  const navigate = useNavigate();

  return (
    <div className={cx('container')}>
      <div className={cx('illustImage')}>
        <img 
          src='/images/illust.png'
        />
      </div>
      <div className={cx('sloganImage')}>
        <img
          src='/images/Introduce_slogan.png' />
      </div>
      <div className={cx('textBox')}>
        <span>내 반려동물과의 <span className={cx('boldText')}>소중한 순간</span>을</span>
        <span><span className={cx('boldText')}>애니숏</span>을 통해 남겨보세요!</span>
      </div>
      <div className={cx('sort')}>
        <Btn title='회원가입' nav='signup' move={true}/>
        <Btn title='로그인' nav='signin' move={true}/>
      </div>

      {/* <div className={cx("video_sort")}>
        <ReactPlayer
          url={'https://www.youtube.com/watch?v=gwbccjH9iAo'}    // 플레이어 url
          width='38rem'         // 플레이어 크기 (가로)
          height='60rem'        // 플레이어 크기 (세로)
          playing={true}        // 자동 재생 on
          muted={true}          // 자동 재생 on
          controls={true}       // 플레이어 컨트롤 노출 여부
          light={false}         // 플레이어 모드
          pip={true}            // pip 모드 설정 여부
        // onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
        />
      </div>
      <div className={cx('sort')}>
        <KakaoBt name="카카오로 빠르게 시작하기"/>
      </div>
      <Dash title="또는" />
      <div className={cx('login-sort')}>
        <p onClick={() => { navigate(`/signup`) }}>회원가입</p>
        <p>|</p>
        <p onClick={() => { navigate(`/signin`) }}>ID로 로그인</p>
      </div> */}
    </div>
  )
}

export default Intro