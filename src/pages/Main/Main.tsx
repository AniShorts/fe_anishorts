import className from "classnames/bind";
import { Footer } from "component/Footer/Footer";
import { useState } from "react";
import styles from "./Main.module.scss";

const cx = className.bind(styles);

const Main = () => {
  const [more, setMore] = useState(false);
  return (
    <div className={cx("container")}>
      <div className={cx("bottom_container")}>
        <div className={cx("bottom_top")}>
          <img className={cx("img")} />
          <div className={cx("nickname")}>닉네임닉네임닉네임닉네임닉네임</div>
        </div>
        <div
          className={cx("content")}
          onClick={() => setMore(!more)}
          style={{ height: more ? "auto" : "25px" }}
        >
          콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트콘텐트
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main