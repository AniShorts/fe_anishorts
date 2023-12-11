import className from "classnames/bind";
import styles from "./Side.module.scss";
import { motion } from "framer-motion";

const cx = className.bind(styles);

type Props = {
  like: boolean;
  clickHandle: (kind: "like" | "comment" | "bottom") => void;
};

export function Side({ like, clickHandle }: Props) {
  const onClickHandle = (kind: "like" | "comment" | "bottom") => {
    clickHandle(kind);
  };
  return (
    <div onClick={(e) => e.stopPropagation()} className={cx("container")}>
      <div className={cx("wrap")}>
        <motion.img
          whileTap={{ scale: 1.5 }}
          onClick={() => onClickHandle("like")}
          src={`/images/icon/heart${like ? "_able" : ""}.png`}
          style={{ width: "31.3px" }}
        />
        <div>7.6만</div>
        <motion.img
          whileTap={{ scale: 1.5 }}
          onClick={() => onClickHandle("comment")}
          src="/images/icon/chatting.png"
          style={{ width: "31.3px", marginTop: "20px" }}
        />
        <div>656</div>
        <motion.img
          whileTap={{ scale: 1.5 }}
          onClick={() => onClickHandle("bottom")}
          src="/images/icon/etc.png"
          style={{ width: "20.3px", marginTop: "21.8px" }}
        />
      </div>
    </div>
  );
}
