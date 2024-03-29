import className from "classnames/bind";
import styles from "./Footer.module.scss";
import { useEffect, useState } from "react";
import theme from "theme";
import { FooterKind } from "@utils/types/footerKind";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const cx = className.bind(styles);

type Arr = {
  title: FooterKind;
  src: string;
};

type Props = {
  played?: any;
  clickHandle?: (kind: FooterKind) => void;
};

export function Footer({ played, clickHandle }: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [arr] = useState<Arr[]>([
    { title: "홈", src: "/home" },
    { title: "검색", src: "/search" },
    { title: "더보기", src: "/create" },
    { title: "산책", src: "/walk" },
    { title: "설정", src: "/setting" },
  ]);
  const [ableItem, setAbleItem] = useState("홈");

  const onClickHandle = (kind: FooterKind, src: string) => {
    navigate(`${src}`);
    clickHandle && clickHandle(kind);
  };

  useEffect(() => {
    arr.map((v) => {
      if (location.pathname === v.src) {
        return setAbleItem(v.title);
      }
    });
  }, [location.pathname]);

  return (
    <div className={cx("container")}>
      {played && <progress className={cx("progress")} value={played} />}
      <div className={cx("wrap")}>
        {arr.map((v) => (
          <div
            onClick={() => onClickHandle(v.title, v.src)}
            className={cx("body")}
            style={{ color: v.title === ableItem ? theme.pupple : "#d1d1d1" }}
          >
            <div
              className={cx("dot")}
              style={{ opacity: v.title === ableItem ? "1" : "0" }}
            />
            <motion.img
              whileTap={{ scale: "1.2" }}
              src={`/images/icon${v.src}${
                v.title === ableItem ? "_able" : ""
              }.png`}
            />
            <div>{v.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
