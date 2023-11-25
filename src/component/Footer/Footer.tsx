import className from "classnames/bind";
import styles from "./Footer.module.scss";
import { useState } from "react";
import theme from "theme";
import { FooterKind } from "@utils/types/footerKind";

const cx = className.bind(styles);

type Arr = {
  title: FooterKind;
  src: string;
};

type Props = {
  played: any;
  FooterHandle: (kind: FooterKind) => void;
};

export function Footer({ played, FooterHandle }: Props) {
  const [arr] = useState<Arr[]>([
    { title: "홈", src: "home" },
    { title: "검색", src: "search" },
    { title: "더보기", src: "more" },
    { title: "마이펫", src: "foot" },
    { title: "설정", src: "setting" },
  ]);
  const [ableItem, setAbleItem] = useState("홈");

  const onClickHandle = (kind: FooterKind) => {
    setAbleItem(kind);
    FooterHandle(kind);
  };
  return (
    <div className={cx("container")}>
      <progress className={cx("progress")} value={played} />
      <div className={cx("wrap")}>
        {arr.map((v) => (
          <div
            onClick={() => onClickHandle(v.title)}
            className={cx("body")}
            style={{ color: v.title === ableItem ? theme.pupple : "#d1d1d1" }}
          >
            <div
              className={cx("dot")}
              style={{ opacity: v.title === ableItem ? "1" : "0" }}
            />
            <img
              src={`/images/icon/${v.src}${
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
