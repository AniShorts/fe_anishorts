import React from 'react';
import className from "classnames/bind";
import styles from './Btn.module.scss';

type IProps = {
  title: string;
};

const Btn = (props: IProps) => {
  const cx = className.bind(styles);

  return (
    <>
      {
        props.title === "로그인" ?
          <div className={cx("purpleBtn")}>{props.title}
          </div> :
           <div className={cx("whiteBtn")}>{props.title}
           </div>
      }
    </>
  )
}

export default Btn