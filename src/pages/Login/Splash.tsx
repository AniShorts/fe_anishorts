import React from 'react'
import className from "classnames/bind";
import styles from "./Splash.module.scss";

const Splash = () => {
  const cx = className.bind(styles);
  return (
    <div className={cx("container")}>
      <div className={cx('imgBox')}>
        <img
          src='/images/logo.png' />
        <img
          src='/images/splash_logo.png' />
      </div>
      <div className={cx('sloganBox')}>
        <img
          src='images/splash_slogan.png' />
      </div>
    </div>
  )
}

export default Splash