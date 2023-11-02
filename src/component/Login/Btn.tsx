import React from 'react';
import className from "classnames/bind";
import styles from './Btn.module.scss';
import { useNavigate } from 'react-router-dom';

type IProps = {
  title: string;
  nav: string;
};

const Btn = (props: IProps) => {
  const cx = className.bind(styles);
  const navigate = useNavigate();

  return (
    <>
      {
        props.title === "로그인" ?
          <button onClick={()=> navigate(`/${props.nav}`)} className={cx("purpleBtn")}>{props.title}
          </button> :
           <button type='button' onClick={()=> navigate(`/${props.nav}`)} className={cx("whiteBtn")}>{props.title}
           </button>
      }
    </>
  )
}

export default Btn