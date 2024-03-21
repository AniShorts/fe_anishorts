import React from 'react';
import className from "classnames/bind";
import styles from './Btn.module.scss';
import { useNavigate } from 'react-router-dom';

type IProps = {
  title: string;
  nav: string;
  move: boolean;
};

const Btn = (props: IProps) => {
  const cx = className.bind(styles);
  const navigate = useNavigate();

  return (
    <>
      {
        props.move ?
          <button onClick={() => { navigate(`/${props.nav}`) }} className={cx(props.title === "로그인" ? "purpleBtn" : "whiteBtn")}>{props.title}</button> :
          <button className={cx(props.title === "로그인" ? "purpleBtn" : "whiteBtn")}>{props.title}</button>
      }
    </>
  )
}

export default Btn